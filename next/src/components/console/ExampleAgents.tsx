import { useSession } from "next-auth/react";
import React from "react";

import { ExampleAgentButton } from "./ExampleAgentButton";
import { useSID } from "../../hooks/useSID";
import FadeIn from "../motions/FadeIn";

type ExampleAgentsProps = {
  setAgentRun?: (name: string, goal: string) => void;
  setShowSignIn: (show: boolean) => void;
};

const ExampleAgents = ({ setAgentRun, setShowSignIn }: ExampleAgentsProps) => {
  const { data: session } = useSession();
  const sid = useSID(session);

  return (
    <>
      <FadeIn delay={0.9} duration={0.5}>
        <div className="my-2 grid grid-cols-1 items-stretch gap-2 sm:my-4 sm:grid-cols-3">

          <ExampleAgentButton name="Virtual Clinic" setAgentRun={setAgentRun}>
          Digital human based auto admission/diagnosis/treatment with Auto-X Agents
          </ExampleAgentButton>

          <ExampleAgentButton name="Enterprise Search" setAgentRun={setAgentRun}>
          Search local or internet information using local LLMs such as Llama3 and Mixtral with Auto-X Agents.
          </ExampleAgentButton>

          <ExampleAgentButton name="ERP" setAgentRun={setAgentRun}>
          Search local or internet information using local LLMs such as Llama3 and Mixtral with Auto-X Agents.
          </ExampleAgentButton>

          
        </div>
        
      </FadeIn>
    </>
  );
};

export default ExampleAgents;
