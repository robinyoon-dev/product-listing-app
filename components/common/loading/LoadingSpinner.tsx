const LoadingSpinner = ({ text }: { text?: string }) => {

    const LOADING_TEXT = text || "Loading...";

    return (
        <div className="flex flex-row justify-center items-center w-fit h-fit p-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-3 size-5 animate-spin"
            >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
            {LOADING_TEXT}
        </div>
    );
}

export default LoadingSpinner;