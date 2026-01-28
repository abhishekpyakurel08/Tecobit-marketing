# AI Prompt Guide

This CMS uses a dynamic prompt generation system.

## How to Create Prompts

1.  Go to the **AI Prompts** collection in the Admin Panel.
2.  Click **Create New**.
3.  Fill in the **Title** and **Category**.
4.  Set the **Prompt Type** to 'Dynamic' or 'Static'.
5.  Write your **Base Prompt**. Use `{{variableName}}` syntax for dynamic parts.
    *   Example: `Write a blog post about {{topic}} for {{audience}}.`
6.  Define **Variables** in the variables array.
    *   `Name`: Must match the variable in the base prompt (e.g., `topic`).
    *   `Type`: Text, Number, or Select.
    *   `Default Value`: Optional fallback.
7.  Select the **AI Model** (GPT-4 recommended for high quality).

## Using the API

Send a POST request to `/api/generate` (if generic endpoint exists) or specific endpoints like `/api/generate/blog`.

Example Body:
```json
{
  "topic": "Digital Marketing",
  "keywords": ["SEO", "Growth"],
  "tone": "Professional"
}
```
