/** Options for the command() function. */
export type CommandOpts = {
  silent?: boolean;
};

/**
 * @param commandString Raw shell command to execute.
 * @param opts Optional params, such as silencing the output.
 * @returns Uninvoked Deno.Command instance.
 * @example
 * ```ts
 * command("rsync ...").spawn();
 * command("rm ...", { silent: true }).spawn();
 * const status = await command("mkdir ...").spawn().status;
 * const { success, code, signal, stdout, stderr } = await command("git ...").output();
 * ```
 */
export function command(commandString: string, opts: CommandOpts = {}): Deno.Command {
  return new Deno.Command("sh", {
    args: [
      "-c",
      commandString,
    ],
    stdout: opts.silent ? "null" : undefined,
    stderr: opts.silent ? "null" : undefined,
  });
}
