import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { SolTokenStaking } from "../target/types/sol_token_staking";

describe("sol-token-staking", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.SolTokenStaking as Program<SolTokenStaking>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
