const Pooja = () => {
  return (
    <div className="flex flex-col items-center mt-10 text-white text-2xl font-malayalam leading-relaxed">
      <div className="flex flex-col mb-6 shadow-lg">
        <div className="block bg-transparent p-4 w-full overflow-x-auto">
          <div className="mb-12">
            <h1 className="text-4xl lg:text-6xl mb-4 flex items-center justify-center font-bold leading-tight text-amber-500 text-center">
              പൂജ സമയങ്ങൾ
            </h1>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>
          <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="w-full border-collapse bg-white/5 backdrop-blur-sm">
              <thead>
                <tr className="bg-amber-500/20 border-b-2 border-amber-500/40">
                  <th className="text-lg font-semibold px-6 py-4 text-left text-amber-400">
                    Time
                  </th>
                  <th className="text-lg font-semibold px-6 py-4 text-center text-amber-400">
                    Pooja
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Morning Section Header */}
                <tr className="bg-amber-500/10 border-b border-amber-500/20">
                  <td colSpan="2" className="text-xl font-semibold px-6 py-4 text-center text-amber-300">
                    രാവിലെ
                  </td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="text-base px-6 py-4 font-medium text-white/90">
                    5.30 am to 6.15 am
                  </td>
                  <td className="text-base px-6 py-4 text-center text-white/80">
                    നടതുറക്കൽ, നിർമ്മാല്യ ദർശനം, അഭിഷേകം
                  </td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="text-base px-6 py-4 font-medium text-white/90">
                    7.00 am to 7.30 am
                  </td>
                  <td className="text-base px-6 py-4 text-center text-white/80">
                    ഉഷപൂജ
                  </td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="text-base px-6 py-4 font-medium text-white/90">
                    9.00 am to 9.15 am
                  </td>
                  <td className="text-base px-6 py-4 text-center text-white/80">
                    ഉച്ചപൂജ
                  </td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="text-base px-6 py-4 font-medium text-white/90">
                    10 am
                  </td>
                  <td className="text-base px-6 py-4 text-center text-white/80">
                    നട അടയ്കൽ
                  </td>
                </tr>
                {/* Evening Section Header */}
                <tr className="bg-amber-500/10 border-b border-amber-500/20 border-t-2 border-amber-500/20">
                  <td colSpan="2" className="text-xl font-semibold px-6 py-4 text-center text-amber-300">
                    വൈകീട്ട്
                  </td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="text-base px-6 py-4 font-medium text-white/90">
                    5.30 pm
                  </td>
                  <td className="text-base px-6 py-4 text-center text-white/80">
                    നട തുറക്കൽ
                  </td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="text-base px-6 py-4 font-medium text-white/90">
                    6.30 pm
                  </td>
                  <td className="text-base px-6 py-4 text-center text-white/80">
                    ദീപാരാധന
                  </td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="text-base px-6 py-4 font-medium text-white/90">
                    7.00 pm to 7.25 pm
                  </td>
                  <td className="text-base px-6 py-4 text-center text-white/80">
                    അത്താഴപൂജ
                  </td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="text-base px-6 py-4 font-medium text-white/90">
                    7.30 pm
                  </td>
                  <td className="text-base px-6 py-4 text-center text-white/80">
                    നട അടയ്കൽ
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-16 mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-amber-400 text-center mb-6">
              പ്രധാന വഴിപാടുകൾ
            </h2>
            <div className="w-20 h-0.5 bg-amber-500/50 mx-auto mb-8 rounded-full"></div>
            <ul className="space-y-3 max-w-2xl mx-auto">
              <li className="bg-white/5 backdrop-blur-sm rounded-lg px-6 py-4 text-lg text-white/90 hover:bg-white/10 transition-colors duration-200 border-l-4 border-amber-500/50">
                വാകചാർത്ത്
              </li>
              <li className="bg-white/5 backdrop-blur-sm rounded-lg px-6 py-4 text-lg text-white/90 hover:bg-white/10 transition-colors duration-200 border-l-4 border-amber-500/50">
                ചന്ദനംചാർത്ത്
              </li>
              <li className="bg-white/5 backdrop-blur-sm rounded-lg px-6 py-4 text-lg text-white/90 hover:bg-white/10 transition-colors duration-200 border-l-4 border-amber-500/50">
                വെള്ളികുടത്തിൽ വെണ്ണ നിവേദ്യം
              </li>
              <li className="bg-white/5 backdrop-blur-sm rounded-lg px-6 py-4 text-lg text-white/90 hover:bg-white/10 transition-colors duration-200 border-l-4 border-amber-500/50">
                തൃക്കൈവെണ്ണ
              </li>
              <li className="bg-white/5 backdrop-blur-sm rounded-lg px-6 py-4 text-lg text-white/90 hover:bg-white/10 transition-colors duration-200 border-l-4 border-amber-500/50">
                പാൽപ്പായസം
              </li>
              <li className="bg-white/5 backdrop-blur-sm rounded-lg px-6 py-4 text-lg text-white/90 hover:bg-white/10 transition-colors duration-200 border-l-4 border-amber-500/50">
                കളഭം
              </li>
              <li className="bg-white/5 backdrop-blur-sm rounded-lg px-6 py-4 text-lg text-white/90 hover:bg-white/10 transition-colors duration-200 border-l-4 border-amber-500/50">
                സന്താന സൗഭാഗ്യത്തിനായി തൊട്ടിൽ നേര്ച്ച
              </li>
            </ul>
          </div>
          <div className="mt-16 mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-amber-400 text-center mb-6">
              വിശേഷ ദിവസങ്ങൾ
            </h2>
            <div className="w-20 h-0.5 bg-amber-500/50 mx-auto mb-8 rounded-full"></div>
            <ul className="space-y-3 max-w-2xl mx-auto">
              <li className="bg-white/5 backdrop-blur-sm rounded-lg px-6 py-4 text-lg text-white/90 hover:bg-white/10 transition-colors duration-200 border-l-4 border-amber-500/50">
                വ്യാഴം, ശനി
              </li>
              <li className="bg-white/5 backdrop-blur-sm rounded-lg px-6 py-4 text-lg text-white/90 hover:bg-white/10 transition-colors duration-200 border-l-4 border-amber-500/50">
                എല്ലാ മാസവും തിരുവോണം നക്ഷത്രം
              </li>
              <li className="bg-white/5 backdrop-blur-sm rounded-lg px-6 py-4 text-lg text-white/90 hover:bg-white/10 transition-colors duration-200 border-l-4 border-amber-500/50">
                ഏകാദശി
              </li>
            </ul>
          </div>
          <div className="mt-16 mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-amber-400 text-center mb-6">
              ഉത്സവങ്ങൾ / ആഘോഷങ്ങൾ
            </h2>
            <div className="w-20 h-0.5 bg-amber-500/50 mx-auto mb-8 rounded-full"></div>
            <ul className="space-y-3 max-w-2xl mx-auto">
              <li className="bg-white/5 backdrop-blur-sm rounded-lg px-6 py-4 text-lg text-white/90 hover:bg-white/10 transition-colors duration-200 border-l-4 border-amber-500/50">
                മഹോത്സവം - മേട മാസത്തിലെ അനിഴം നക്ഷത്രത്തിൽ കൊടിയേറി തിരുവോണം ആറാട്ട്
              </li>
              <li className="bg-white/5 backdrop-blur-sm rounded-lg px-6 py-4 text-lg text-white/90 hover:bg-white/10 transition-colors duration-200 border-l-4 border-amber-500/50">
                അഷ്ടമിരോഹിണി
              </li>
              <li className="bg-white/5 backdrop-blur-sm rounded-lg px-6 py-4 text-lg text-white/90 hover:bg-white/10 transition-colors duration-200 border-l-4 border-amber-500/50">
                നവരാത്രി
              </li>
              <li className="bg-white/5 backdrop-blur-sm rounded-lg px-6 py-4 text-lg text-white/90 hover:bg-white/10 transition-colors duration-200 border-l-4 border-amber-500/50">
                ദശാവതാരം ചന്ദനം ചാർത്തൽ
              </li>
              <li className="bg-white/5 backdrop-blur-sm rounded-lg px-6 py-4 text-lg text-white/90 hover:bg-white/10 transition-colors duration-200 border-l-4 border-amber-500/50">
                ഭാഗവത സപ്താഹം
              </li>
              <li className="bg-white/5 backdrop-blur-sm rounded-lg px-6 py-4 text-lg text-white/90 hover:bg-white/10 transition-colors duration-200 border-l-4 border-amber-500/50">
                അയ്യപ്പൻ പാട്ടും വിളക്കും
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pooja;
