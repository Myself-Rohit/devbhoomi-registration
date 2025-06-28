const TermsAndCondition = ({ isAgree, setIsAgree }) => {
  return (
    <div className="max-w-4xl mx-auto  bg-white rounded-lg space-y-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Terms &amp; Conditions
      </h2>

      <p className="text-gray-700">
        <strong>K J R Devbhoomi Global Services Pvt. Ltd.</strong> is a leading
        talent acquisition agency committed to providing effective recruitment
        solutions for our clients. By registering with our agency, you agree to
        the following terms and conditions:
      </p>

      {/* Section: Registration & Validity */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">
          Registration &amp; Validity
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            Registration is mandatory to participate in interviews and avail
            recruitment services.
          </li>
          <li>
            Valid for 45 days, allowing a maximum of three (3) interviews.
          </li>
          <li>
            Shortlisting for interviews depends on eligibility and requirements.
          </li>
          <li>
            Registration does not guarantee job placement; it depends on
            performance and skills.
          </li>
        </ul>
      </section>

      {/* Section: Service Charges */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">
          Service Charges
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            Upon selection or receiving a joining letter, pay 7 days’ salary of
            the first month.
          </li>
          <li>
            Payment must be made within the stipulated period after
            selection/joining.
          </li>
          <li>
            If delayed, pay 15 days' salary of the first month upon receiving
            your salary.
          </li>
        </ul>
      </section>

      {/* Section: Refund Policy */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">
          Refund Policy
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            All registration and service charges are non-refundable under any
            circumstances.
          </li>
        </ul>
      </section>

      {/* Section: Interview Terms */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">
          Interview Terms
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            Interviews will follow the given schedule and location strictly.
          </li>
          <li>
            Carry all necessary documents (appointment letter, academic and
            experience certificates).
          </li>
          <li>
            Travel and incidental expenses are the candidate's responsibility.
          </li>
        </ul>
      </section>

      {/* Section: Responsibility Clause */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">
          Responsibility Clause
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            Selected candidates become employees of the hiring organization.
          </li>
          <li>
            We are not responsible for disputes between candidate and employer.
          </li>
        </ul>
      </section>

      {/* Section: Registration Cancellation */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">
          Registration Cancellation
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Inactive for over 45 days.</li>
          <li>Missed more than one interview without prior notice.</li>
          <li>Sharing confidential job/employer info.</li>
          <li>Non-response to communications.</li>
          <li>Misconduct with staff.</li>
        </ul>
      </section>

      {/* Section: Confidentiality Clause */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">
          Confidentiality Clause
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            No sharing of employer/job info with unauthorized third parties.
          </li>
          <li>Violation can result in cancellation and legal action.</li>
        </ul>
      </section>

      {/* Section: Code of Conduct */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">
          Code of Conduct for Candidates
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            Maintain professional behavior in interviews and communications.
          </li>
          <li>Unprofessional conduct may lead to disqualification.</li>
        </ul>
      </section>

      {/* Section: Data Usage Policy */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">
          Data Usage Policy
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            Consent to use personal info for recruitment, training, and
            counseling.
          </li>
          <li>No data sharing with unauthorized third parties.</li>
        </ul>
      </section>

      {/* Section: Fee Dispute Resolution Clause */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">
          Fee Dispute Resolution Clause
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Raise disputes within 7 days of selection/joining in writing.</li>
          <li>Final decision lies with the company.</li>
        </ul>
      </section>

      {/* Section: Legal Action Clause */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">
          Legal Action Clause
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Failure to pay may lead to legal proceedings.</li>
          <li>Company may pursue litigation or arbitration as needed.</li>
        </ul>
      </section>

      {/* Section: Force Majeure */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">
          Force Majeure Clause
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            We are not liable for delays due to natural disasters, strikes, or
            technical issues.
          </li>
        </ul>
      </section>

      {/* Section: Contact Info */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">
          Contact Details for Grievances
        </h3>
        <p className="text-gray-700">
          Email:{" "}
          <a
            href="mailto:devbhoomiglobalservices@gmail.com"
            className="text-blue-600 underline"
          >
            devbhoomiglobalservices@gmail.com
          </a>
        </p>
      </section>

      {/* Section: Post-Selection Obligation */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">
          Candidate Obligations Post-Selection
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            Must inform the company about joining status within 7 days of
            selection.
          </li>
        </ul>
      </section>
      <div className="text-gray-700  text-center">
        <input type="checkbox" onChange={() => setIsAgree(!isAgree)} />
        <span className="ml-2">I agree to the terms and conditions.</span>
      </div>
    </div>
  );
};

export default TermsAndCondition;
