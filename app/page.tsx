export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-2 text-white">
      <h1 className="text-5xl font-bold my-20 ">ChatGPT</h1>

      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">&quot; Explain something to me &quot; </p>
            <p className="infoText">
              &quot; What is the difference between dog and a cat &quot;
            </p>
            <p className="infoText">
              &quot; What is the color of the sun? &quot;
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>

            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              &quot; Change the ChatGPT model to use &quot;
            </p>
            <p className="infoText">
              &quot; Messages are stored in firebase&apos;s firestore &quot;
            </p>
            <p className="infoText">
              &quot; Hot Toast notifications when ChatGPT is thinking &quot;
            </p>
          </div>
        </div>
        <div>
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>

              <h2>Limitations</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">
                &quot; May occasionally generate incorrect information &quote;
              </p>
              <p className="infoText">
                &quot; May occasionally produce harmful instructions or biased
                content &quot;
              </p>
              <p className="infoText">
                &quot; Limited knowledge of world after 2021 &quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
