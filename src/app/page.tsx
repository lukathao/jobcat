import { SignedOut, SignedIn } from "@clerk/nextjs";
import JobSearchForm from "./components/form/form";

export default function Home() {
  return (
    <main>
      <div className="max-w-lg mx-auto mt-8 p-4 shadow-lg">
        <div className="flex justify-center text-4xl text-white font-bold pt-2 uppercase">
          <h1 className="text-4xl text-white font-bold uppercase">jobcat</h1>
        </div>
        <div className='flex justify-center text-xl text-white font-bold p-2' >
          <SignedOut>
            {/* Sign-in to use this job searching tool. */}
            <JobSearchForm />
          </SignedOut>
          <SignedIn>
            <JobSearchForm />
          </SignedIn>
        </div>
      </div>
    </main>
  );
}
