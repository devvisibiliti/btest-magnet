"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

type Props = {
  value: string;
  onChange: (html: string) => void;
};

export default function RichTextEditor({ value, onChange }: Props) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value || "",
     immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "min-h-[200px] outline-none prose prose-sm max-w-none p-2",
      },
    },
  });

  if (!editor) return null;

  return (
    <div className="border rounded p-2 bg-white">
      <div className="flex gap-2 mb-2 flex-wrap">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className="border px-2 py-1 rounded"
        >
          B
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className="border px-2 py-1 rounded"
        >
          I
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className="border px-2 py-1 rounded"
        >
          • List
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className="border px-2 py-1 rounded"
        >
          1. List
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().setParagraph().run()}
          className="border px-2 py-1 rounded"
        >
          P
        </button>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
}
