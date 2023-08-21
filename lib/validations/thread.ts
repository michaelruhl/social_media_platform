import * as z from "zod";

export const ThreadValidation = z.object({
  thread: z.string().nonempty().min(3, { message: "Minimum three characters" }),
  accountId: z.string(),
});

export const CommentdValidation = z.object({
    thread: z.string().nonempty().min(3, { message: "Minimum three characters" }),
    accountId: z.string(),
  });
