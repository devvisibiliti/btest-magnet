"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Link from "@tiptap/extension-link"
import { useEffect } from "react"

export default function TiptapEditor({ value, onChange }) {

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: true,
        autolink: true,
        linkOnPaste: true,
        HTMLAttributes: {
      class: "text-blue-600 underline cursor-pointer",
      target: "_blank",
      rel: "noopener noreferrer"
    }
      })
    ],
    content: value,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    }
  })
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value)
    }
  }, [value, editor])

  if (!editor) return null

  const addLink = () => {
    const url = prompt("Enter URL")

    if (!url) return

    editor.chain().focus().setLink({ href: url }).run()
  }

  return (
    <div className="border border-gray-300 rounded p-3">

      {/* Toolbar */}
      <div className="flex gap-2 mb-3 border-b pb-2">

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className="px-2 py-1 border rounded"
        >
          Bold
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className="px-2 py-1 border rounded"
        >
          Italic
        </button>

        <button
          type="button"
          onClick={addLink}
          className="px-2 py-1 border rounded"
        >
          Link
        </button>

      </div>

      <EditorContent editor={editor} className="min-h-[120px]" />

    </div>
  )
}