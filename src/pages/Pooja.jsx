const Pooja = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="mb-12">
            <h1 className="text-4xl lg:text-6xl mb-4 flex items-center justify-center font-bold leading-tight text-amber-500 text-center">
              പൂജ സമയങ്ങൾ
            </h1>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>
          <div className="overflow-x-auto rounded-lg">
            <table className="w-full border-collapse bg-white shadow-md">
              <thead>
                <tr className="bg-amber-500/20 border-b-2 border-amber-500/40">
                  <th className="text-lg font-semibold px-6 py-4 text-left text-amber-700">
                    Time
                  </th>
                  <th className="text-lg font-semibold px-6 py-4 text-center text-amber-700">
                    Pooja
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Morning Section Header */}
                <tr className="bg-amber-50 border-b border-amber-500/20">
                  <td colSpan="2" className="text-xl font-semibold px-6 py-4 text-center text-amber-700">
                    രാവിലെ
                  </td>
                </tr>
                <tr className="border-b border-amber-500/10 hover:bg-amber-50/50 transition-colors">
                  <td className="text-base px-6 py-4 font-medium text-slate-800">
                    5.30 am to 6.15 am
                  </td>
                  <td className="text-base px-6 py-4 text-center text-slate-700">
                    നടതുറക്കൽ, നിർമ്മാല്യ ദർശനം, അഭിഷേകം
                  </td>
                </tr>
                <tr className="border-b border-amber-500/10 hover:bg-amber-50/50 transition-colors">
                  <td className="text-base px-6 py-4 font-medium text-slate-800">
                    7.00 am to 7.30 am
                  </td>
                  <td className="text-base px-6 py-4 text-center text-slate-700">
                    ഉഷപൂജ
                  </td>
                </tr>
                <tr className="border-b border-amber-500/10 hover:bg-amber-50/50 transition-colors">
                  <td className="text-base px-6 py-4 font-medium text-slate-800">
                    9.00 am to 9.15 am
                  </td>
                  <td className="text-base px-6 py-4 text-center text-slate-700">
                    ഉച്ചപൂജ
                  </td>
                </tr>
                <tr className="border-b border-amber-500/10 hover:bg-amber-50/50 transition-colors">
                  <td className="text-base px-6 py-4 font-medium text-slate-800">
                    10 am
                  </td>
                  <td className="text-base px-6 py-4 text-center text-slate-700">
                    നട അടയ്കൽ
                  </td>
                </tr>
                {/* Evening Section Header */}
                <tr className="bg-amber-50 border-b border-amber-500/20 border-t-2 border-amber-500/20">
                  <td colSpan="2" className="text-xl font-semibold px-6 py-4 text-center text-amber-700">
                    വൈകീട്ട്
                  </td>
                </tr>
                <tr className="border-b border-amber-500/10 hover:bg-amber-50/50 transition-colors">
                  <td className="text-base px-6 py-4 font-medium text-slate-800">
                    5.30 pm
                  </td>
                  <td className="text-base px-6 py-4 text-center text-slate-700">
                    നട തുറക്കൽ
                  </td>
                </tr>
                <tr className="border-b border-amber-500/10 hover:bg-amber-50/50 transition-colors">
                  <td className="text-base px-6 py-4 font-medium text-slate-800">
                    6.30 pm
                  </td>
                  <td className="text-base px-6 py-4 text-center text-slate-700">
                    ദീപാരാധന
                  </td>
                </tr>
                <tr className="border-b border-amber-500/10 hover:bg-amber-50/50 transition-colors">
                  <td className="text-base px-6 py-4 font-medium text-slate-800">
                    7.00 pm to 7.25 pm
                  </td>
                  <td className="text-base px-6 py-4 text-center text-slate-700">
                    അത്താഴപൂജ
                  </td>
                </tr>
                <tr className="border-b border-amber-500/10 hover:bg-amber-50/50 transition-colors">
                  <td className="text-base px-6 py-4 font-medium text-slate-800">
                    7.30 pm
                  </td>
                  <td className="text-base px-6 py-4 text-center text-slate-700">
                    നട അടയ്കൽ
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-16 mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-amber-600 text-center mb-6">
              പ്രധാന വഴിപാടുകൾ
            </h2>
            <div className="w-20 h-0.5 bg-amber-500/50 mx-auto mb-8 rounded-full"></div>
            <ul className="space-y-3 max-w-2xl mx-auto">
              <li className="bg-white rounded-lg px-6 py-4 text-lg text-slate-800 hover:bg-amber-50/50 transition-colors duration-200 border-l-4 border-amber-500/50 shadow-sm">
                വാകചാർത്ത്
              </li>
              <li className="bg-white rounded-lg px-6 py-4 text-lg text-slate-800 hover:bg-amber-50/50 transition-colors duration-200 border-l-4 border-amber-500/50 shadow-sm">
                ചന്ദനംചാർത്ത്
              </li>
              <li className="bg-white rounded-lg px-6 py-4 text-lg text-slate-800 hover:bg-amber-50/50 transition-colors duration-200 border-l-4 border-amber-500/50 shadow-sm">
                വെള്ളികുടത്തിൽ വെണ്ണ നിവേദ്യം
              </li>
              <li className="bg-white rounded-lg px-6 py-4 text-lg text-slate-800 hover:bg-amber-50/50 transition-colors duration-200 border-l-4 border-amber-500/50 shadow-sm">
                തൃക്കൈവെണ്ണ
              </li>
              <li className="bg-white rounded-lg px-6 py-4 text-lg text-slate-800 hover:bg-amber-50/50 transition-colors duration-200 border-l-4 border-amber-500/50 shadow-sm">
                പാൽപ്പായസം
              </li>
              <li className="bg-white rounded-lg px-6 py-4 text-lg text-slate-800 hover:bg-amber-50/50 transition-colors duration-200 border-l-4 border-amber-500/50 shadow-sm">
                കളഭം
              </li>
              <li className="bg-white rounded-lg px-6 py-4 text-lg text-slate-800 hover:bg-amber-50/50 transition-colors duration-200 border-l-4 border-amber-500/50 shadow-sm">
                സന്താന സൗഭാഗ്യത്തിനായി തൊട്ടിൽ നേര്ച്ച
              </li>
            </ul>
          </div>
          <div className="mt-16 mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-amber-600 text-center mb-6">
              വിശേഷ ദിവസങ്ങൾ
            </h2>
            <div className="w-20 h-0.5 bg-amber-500/50 mx-auto mb-8 rounded-full"></div>
            <ul className="space-y-3 max-w-2xl mx-auto">
              <li className="bg-white rounded-lg px-6 py-4 text-lg text-slate-800 hover:bg-amber-50/50 transition-colors duration-200 border-l-4 border-amber-500/50 shadow-sm">
                വ്യാഴം, ശനി
              </li>
              <li className="bg-white rounded-lg px-6 py-4 text-lg text-slate-800 hover:bg-amber-50/50 transition-colors duration-200 border-l-4 border-amber-500/50 shadow-sm">
                എല്ലാ മാസവും തിരുവോണം നക്ഷത്രം
              </li>
              <li className="bg-white rounded-lg px-6 py-4 text-lg text-slate-800 hover:bg-amber-50/50 transition-colors duration-200 border-l-4 border-amber-500/50 shadow-sm">
                ഏകാദശി
              </li>
            </ul>
          </div>
          <div className="mt-16 mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-amber-600 text-center mb-6">
              ഉത്സവങ്ങൾ / ആഘോഷങ്ങൾ
            </h2>
            <div className="w-20 h-0.5 bg-amber-500/50 mx-auto mb-8 rounded-full"></div>
            <ul className="space-y-3 max-w-2xl mx-auto">
              <li className="bg-white rounded-lg px-6 py-4 text-lg text-slate-800 hover:bg-amber-50/50 transition-colors duration-200 border-l-4 border-amber-500/50 shadow-sm">
                മഹോത്സവം - മേട മാസത്തിലെ അനിഴം നക്ഷത്രത്തിൽ കൊടിയേറി തിരുവോണം ആറാട്ട്
              </li>
              <li className="bg-white rounded-lg px-6 py-4 text-lg text-slate-800 hover:bg-amber-50/50 transition-colors duration-200 border-l-4 border-amber-500/50 shadow-sm">
                അഷ്ടമിരോഹിണി
              </li>
              <li className="bg-white rounded-lg px-6 py-4 text-lg text-slate-800 hover:bg-amber-50/50 transition-colors duration-200 border-l-4 border-amber-500/50 shadow-sm">
                നവരാത്രി
              </li>
              <li className="bg-white rounded-lg px-6 py-4 text-lg text-slate-800 hover:bg-amber-50/50 transition-colors duration-200 border-l-4 border-amber-500/50 shadow-sm">
                ദശാവതാരം ചന്ദനം ചാർത്തൽ
              </li>
              <li className="bg-white rounded-lg px-6 py-4 text-lg text-slate-800 hover:bg-amber-50/50 transition-colors duration-200 border-l-4 border-amber-500/50 shadow-sm">
                ഭാഗവത സപ്താഹം
              </li>
              <li className="bg-white rounded-lg px-6 py-4 text-lg text-slate-800 hover:bg-amber-50/50 transition-colors duration-200 border-l-4 border-amber-500/50 shadow-sm">
                അയ്യപ്പൻ പാട്ടും വിളക്കും
              </li>
            </ul>
          </div>
      </div>
    </div>
  );
};

export default Pooja;
