const PoojaTimings = () => {
  return (
    <div className="flex flex-col items-center mt-10 text-white text-2xl">
      <div className="flex flex-col mb-6 shadow-lg">
        <div className="block bg-transparent p-4 w-full overflow-x-auto">
          <div className="flex flex-col items-center text-4xl mb-10">
            <h1>പൂജ സമയങ്ങൾ</h1>
          </div>
          <table className="">
            <thead>
              <tr className="border border-solid">
                <th className="text-md px-6 py-3 align-middle">Time</th>
                <th className="text-md px-6 py-3 align-middle">Pooja</th>
              </tr>
            </thead>
            <tbody>
              <p className="text-md px-6 py-3 flex flex-col text-center">
                രാവിലെ{" "}
              </p>
              <tr>
                <td className="text-md px-6 py-3">5.30 am to 6.15 am</td>
                <td className="text-md px-6 py-3 text-center">
                  നടതുറക്കൽ, നിർമ്മാല്യ ദർശനം, അഭിഷേകം
                </td>
              </tr>
              <tr>
                <td className="text-md px-6 py-3">7.00 am to 7.30 am</td>
                <td className="text-md px-6 py-3 text-center">ഉഷപൂജ</td>
              </tr>
              <tr>
                <td className="text-md px-6 py-3">9.00 am to 9.15 am</td>
                <td className="text-md px-6 py-3 text-center">ഉച്ചപൂജ</td>
              </tr>
              <tr>
                <td className="text-md px-6 py-3">10 am</td>
                <td className="text-md px-6 py-3 text-center">നട അടയ്കൽ</td>
              </tr>
              <p className="text-md px-6 py-3 flex flex-col text-center">
                വൈകീട്ട്{" "}
              </p>
              <tr>
                <td className="text-md px-6 py-3">5.30 pm</td>
                <td className="text-md px-6 py-3 text-center">നട തുറക്കൽ</td>
              </tr>
              <tr>
                <td className="text-md px-6 py-3">6.30 pm</td>
                <td className="text-md px-6 py-3 text-center">ദീപാരാധന</td>
              </tr>
              <tr>
                <td className="text-md px-6 py-3">7.00 pm to 7.25 pm</td>
                <td className="text-md px-6 py-3 text-center">അത്താഴപൂജ</td>
              </tr>
              <tr>
                <td className="text-md px-6 py-3">7.30 pm</td>
                <td className="text-md px-6 py-3 text-center">നട അടയ്കൽ</td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-col items-center text-4xl mt-10 mb-10">
            <h1>പ്രധാന വഴിപാടുകൾ</h1>
          </div>
          <ul className="text-md px-6 py-3 list-disc">
            <li>വാകചാർത്ത്</li>
            <li>ചന്ദനംചാർത്ത്</li>
            <li>വെള്ളികുടത്തിൽ വെണ്ണ നിവേദ്യം</li>
            <li>തൃക്കൈവെണ്ണ</li>
            <li>പാൽപ്പായസം</li>
            <li>കളഭം</li>
            <li>സന്താന സൗഭാഗ്യത്തിനായി തൊട്ടിൽ നേര്ച്ച</li>
          </ul>
          <div className="flex flex-col items-center text-4xl mt-10 mb-10">
            <h1>വിശേഷ ദിവസങ്ങൾ</h1>
          </div>
          <ul className="text-md px-6 py-3 list-disc">
            <li>വ്യാഴം, ശനി</li>
            <li>എല്ലാ മാസവും തിരുവോണം നക്ഷത്രം</li>
            <li>ഏകാദശി</li>
          </ul>
          <div className="flex flex-col items-center text-4xl mt-10 mb-10">
            <h1>ഉത്സവങ്ങൾ / ആഘോഷങ്ങൾ</h1>
          </div>
          <ul className="text-md px-6 py-3 list-disc">
            <li>
              മഹോത്സവം - മേട മാസത്തിലെ അനിഴം നക്ഷത്രത്തിൽ കോടിയേരി തിരുവോണം
              ആറാട്ട്{" "}
            </li>
            <li>അഷ്ടമിരോഹിണി</li>
            <li>നവരാത്രി</li>
            <li>ദശാവതാരം ചന്ദനം ചാർത്തൽ</li>
            <li>ഭാഗവത സപ്താഹം</li>
            <li>അയ്യപ്പൻ പാട്ടും വിളക്കും </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PoojaTimings;
