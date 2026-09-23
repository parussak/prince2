#!/usr/bin/env python3
"""Validate editable content and rebuild the 40 browser-ready module scripts."""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
KINDS = ("storyQuiz", "examQuiz", "flashcards")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def validate(lang, number, data):
    label = f"{lang}/module-{number:02d}"
    if not isinstance(data.get("title"), str) or not data["title"]:
        raise ValueError(f"{label}: title must be a nonempty string")
    if not isinstance(data.get("contentHtml", ""), str):
        raise ValueError(f"{label}: content.html must be text")
    for kind in ("storyQuiz", "examQuiz"):
        questions = data[kind]
        if not isinstance(questions, list):
            raise ValueError(f"{label}/{kind}: expected a list")
        for pos, question in enumerate(questions, 1):
            label_q = f"{label}/{kind} question {pos}"
            if not isinstance(question, dict) or not all(isinstance(question.get(key), str) and question[key] for key in ("question", "explanation")):
                raise ValueError(f"{label_q}: question and explanation are required")
            opts = question.get("options")
            if not isinstance(opts, list) or len(opts) != 4 or any(not isinstance(x, str) or not x for x in opts):
                raise ValueError(f"{label_q}: exactly four nonempty answers required")
            typ = question.get("type", "standard")
            answer = question.get("correct")
            if typ == "list":
                if not isinstance(answer, list) or len(answer) != 2 or len(set(answer)) != 2 or any(type(x) is not int or not 0 <= x < 4 for x in answer):
                    raise ValueError(f"{label_q}: list requires two distinct answer indices")
            elif typ in ("standard", "negative", "missing-word"):
                if type(answer) is not int or not 0 <= answer < 4:
                    raise ValueError(f"{label_q}: expected one answer index 0–3")
                if typ == "missing-word" and "[...]" not in question["question"]:
                    raise ValueError(f"{label_q}: missing-word requires [...] in question")
            else:
                raise ValueError(f"{label_q}: unknown question type {typ!r}")
    if not isinstance(data["flashcards"], list) or any(not isinstance(c, dict) or not isinstance(c.get("q"), str) or not isinstance(c.get("a"), str) for c in data["flashcards"]):
        raise ValueError(f"{label}/flashcards: expected objects with q and a strings")


def main():
    pending = []
    for lang in ("pl", "en"):
        for number in range(1, 21):
            name = f"module-{number:02d}"
            source = ROOT / "editor" / lang / name
            metadata = read_json(source / "meta.json")
            if not isinstance(metadata, dict) or any(k in metadata for k in (*KINDS, "contentHtml")):
                raise ValueError(f"{lang}/{name}: invalid meta.json")
            data = dict(metadata)
            lesson = (source / "content.html").read_text(encoding="utf-8")
            if lesson or not data.get("_placeholder"):
                data["contentHtml"] = lesson
            for kind in KINDS:
                data[kind] = read_json(source / f"{kind}.json")
            validate(lang, number, data)
            body = ("window.MODULE_DATA = window.MODULE_DATA || {};\n"
                    f"window.MODULE_DATA[{number}] = "
                    + json.dumps(data, ensure_ascii=False, indent=2) + ";\n")
            pending.append((ROOT / "modules" / lang / f"{name}.js", body))
    for target, body in pending:
        target.write_text(body, encoding="utf-8")
    print("Rebuilt 40 module scripts; quiz structures validated.")


if __name__ == "__main__":
    try:
        main()
    except (OSError, ValueError, json.JSONDecodeError) as exc:
        sys.exit(f"Build failed: {exc}")
