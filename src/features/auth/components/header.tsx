interface IHeaderInfo {
  headerInfo: string;
  verify?: string;
  aboutYou?: string;
  createStrongPass?: string;
  emailValue?: string;
  setSuccess?: (value: boolean) => void;
  steps?: number;
  setSteps?: (value: number) => void;
  setFocusInput?: (value: boolean) => void;
}

export default function Header({
  headerInfo,
  verify,
  aboutYou,
  createStrongPass,
  emailValue,
  setSuccess,
  steps,
  setSteps,
  setFocusInput,
}: IHeaderInfo) {
  function backToEditEmail() {
    setSuccess && setSuccess(false);
    setSteps && setSteps(0);
    setFocusInput && setFocusInput(true);
  }

  return (
    <>
      <h1
        className={`header font-inter font-bold text-3xl ${headerInfo == "Forgot Password" || headerInfo == "Create a New Password" || verify ? "mb-2.5" : headerInfo == "Password Reset Sent" ? "mb-4" : ""}
        ${headerInfo === "Change Email" ? "mb-7" : ""}`}
      >
        {headerInfo}
      </h1>

      {/* Verify OTP */}
      {steps == 2 && (
        <>
          <h2 className="font-inter font-bold text-2xl text-blue-600 mb-2.5">
            {verify}
          </h2>
          <p className="font-normal text-base text-gray-500">
            Please enter the 6-digits code we have sent to:
          </p>
          <p className="font-medium text-base text-gray-800">
            {emailValue}{" "}
            <button
              onClick={backToEditEmail}
              className="text-blue-600 cursor-pointer mb-4 underline"
            >
              Edit
            </button>
          </p>
        </>
      )}

      {/* About You */}
      {steps == 3 && (
        <>
          <h1 className="font-bold text-2xl text-blue-600 mb-4">{aboutYou}</h1>
        </>
      )}

      {/* Strong Password*/}
      {steps == 4 && (
        <>
          <h1 className="font-bold text-2xl text-blue-600 mb-4">
            {createStrongPass}
          </h1>
        </>
      )}

      {/* Forgot Password */}
      {headerInfo == "Forgot Password" && (
        <p className="text-base font-normal text-gray-500 mb-10">
          Don’t worry, we will help you recover your account.
        </p>
      )}

      {/* New Password */}
      {headerInfo == "Create a New Password" && (
        <p className="text-base font-normal text-gray-500 mb-10">
          Create a new strong password for your account.
        </p>
      )}
    </>
  );
}
// Create a new strong password for your account.
