import type { CollectionConfig } from 'payload'

export const AiPrompts: CollectionConfig = {
    slug: 'ai-prompts',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'category', 'aiModel', 'updatedAt'],
    },
    access: {
        read: () => true,
        create: ({ req: { user } }) => !!user,
        update: ({ req: { user } }) => !!user,
        delete: ({ req: { user } }) => {
            if (!user) return false
            return user.role === 'admin'
        },
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'category',
            type: 'text',
            required: true,
        },
        {
            name: 'promptType',
            type: 'select',
            options: [
                { label: 'Dynamic', value: 'dynamic' },
                { label: 'Static', value: 'static' },
            ],
            defaultValue: 'dynamic',
        },
        {
            name: 'basePrompt',
            type: 'textarea',
            required: true,
        },
        {
            name: 'variables',
            type: 'array',
            fields: [
                {
                    name: 'name',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'type',
                    type: 'select',
                    options: [
                        { label: 'Text', value: 'text' },
                        { label: 'Number', value: 'number' },
                        { label: 'Select', value: 'select' },
                    ],
                },
                {
                    name: 'options',
                    type: 'array',
                    fields: [
                        {
                            name: 'value',
                            type: 'text',
                        },
                    ],
                },
                {
                    name: 'defaultValue',
                    type: 'text',
                },
            ],
        },
        {
            name: 'examples',
            type: 'array',
            fields: [
                {
                    name: 'input',
                    type: 'textarea',
                },
                {
                    name: 'output',
                    type: 'textarea',
                },
            ],
        },
        {
            name: 'aiModel',
            type: 'select',
            options: [
                { label: 'GPT-4', value: 'gpt-4' },
                { label: 'GPT-3.5', value: 'gpt-3.5-turbo' },
            ],
            defaultValue: 'gpt-4',
        },
        {
            name: 'temperature',
            type: 'number',
            min: 0,
            max: 1,
            defaultValue: 0.7,
        },
        {
            name: 'maxTokens',
            type: 'number',
            defaultValue: 1000,
        },
        {
            name: 'tags',
            type: 'array',
            fields: [
                {
                    name: 'tag',
                    type: 'text',
                },
            ],
        },
    ],
}
