const About = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-amber-500 text-center mb-4">
            History of Aniyil Sreekrishna Swami Temple
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Text Content */}
          <div className="flex-1">
            <p className="text-white text-lg lg:text-xl leading-relaxed font-malayalam">
              അണിയിൽ ശ്രീകൃഷ്ണസ്വാമി ക്ഷേത്രത്തിന്റെ ചരിത്രം ഐതിഹ്യവുമായി
              ബന്ധപ്പെട്ടിരിക്കുന്നു. ഇപ്പോൾ ക്ഷേത്രം ഇരിക്കുന്ന സ്ഥലം പണ്ട് നമ്പൂതിരി
              ഇല്ലം ആയിരുന്നു. കഥകളിക്ക് പ്രസിദ്ധമായിരുന്നു ആ മന. ഒരിക്കൽ കഥകളിക്ക്
              സമയമായിട്ടും കൃഷ്ണവേഷം ആടേണ്ട നടൻ എത്തിച്ചേർന്നിരുന്നില്ല. എല്ലാവരും
              വിഷമിച്ചിരിക്കെ ഒരു അപരിചിതൻ വന്ന് കൃഷ്ണവേഷം കെട്ടാമെന്ന് പറയുകയും
              അങ്ങിനെ കഥകളി നടക്കുകയും ചെയ്തു. എന്നാൽ കളി കഴിഞ്ഞ് അണിയറയിലേക് പോയ
              കൃഷ്ണവേഷം ആടിയ അജ്ഞാതൻ പെട്ടെന് അദൃശ്യമായി. പിന്നീട് പ്രശ്നം വെച്ചപ്പോൾ
              അത് സാക്ഷാൽ കൃഷ്ണഭഗവാൻ ആണെന്ന് കണ്ടുവത്രെ. കൃഷ്ണൻ അണിയറയിൽ മറഞ്ഞ
              സ്ഥലത്തു കൊച്ചി രാജാവ് ക്ഷേത്രം നിർമിക്കുകയും കൃഷ്ണനെ പ്രതിഷ്ഠിക്കുകയും
              ചെയ്തു. 'അണിയറ കൃഷ്ണനിൽ' നിന്നാണത്രെ ആണിയിൽ ക്ഷേത്രം ഉണ്ടായത്. ആ
              സ്മരണിയിൽ അടുത്ത വർഷങ്ങളിലായി കഥകളി നടത്തി വരുന്നു.
            </p>
          </div>

          {/* Image */}
          <div className="flex-shrink-0 w-full lg:w-96">
            <div className="relative">
              <img
                src="https://scontent.fcok1-1.fna.fbcdn.net/v/t39.30808-6/469364929_122162187848266533_376186102554326843_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=4aVJOF3ay4IQ7kNvwEtIpBb&_nc_oc=AdmFkoDvsjBQKTPa1Ev-a9J18FB1KZGQYax1Wj5cnSk0whjZzMSoUe9oWhqnF9hk9V809v0AD-M5qXJrxj7Uw63_&_nc_zt=23&_nc_ht=scontent.fcok1-1.fna&_nc_gid=WQM21gscVUQtHTndKETBRg&oh=00_AfrP-Yf_YUNI2URc_vFWmXT2nRw9TjWEMSKcHJCmlrV5iw&oe=697A8531"
                alt="Aniyil Sreekrishna Swami Temple"
                className="w-full h-auto rounded-lg shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
