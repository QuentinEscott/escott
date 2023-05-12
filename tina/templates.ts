import type { TinaField } from "tinacms";
export function authorFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
  ] as TinaField[];
}
export function postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "string",
      name: "author",
      label: "author",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "string",
      name: "categories",
      label: "categories",
      list: true,
    },
    {
      type: "string",
      name: "type",
      label: "type",
    },
  ] as TinaField[];
}
export function toolsFields() {
  return [
    {
      type: "object",
      name: "tools",
      label: "tools",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "title",
        },
        {
          type: "object",
          name: "tool",
          label: "tool",
          list: true,
          fields: [
            {
              type: "string",
              name: "name",
              label: "name",
            },
            {
              type: "image",
              name: "image",
              label: "image",
            },
            {
              type: "string",
              name: "link",
              label: "link",
            },
          ],
        },
      ],
    },
  ] as TinaField[];
}
