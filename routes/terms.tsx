// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.

import { useData } from "aleph/react";
import * as gfm from "gfm/mod.ts";

export const data = {
  async get(_: Request, _ctx: Context) {
    const text = await Deno.readTextFile("./TERMS.md");
    const html = gfm.render(text);
    return Response.json({ html });
  },
};

export default function Terms() {
  const { data } = useData<{ html: string }>();
  return (
    <div
      className="max-w-screen-md mx-auto markdown-body"
      dangerouslySetInnerHTML={{ __html: data.html }}
    />
  );
}
