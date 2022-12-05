import {
  RiChatPollFill,
  RiMore2Fill,
  RiLoader3Line,
  RiSearchLine,
  RiCheckDoubleFill,
  RiCameraFill,
  RiLinkM,
  RiLink,
  RiEmotionHappyLine,
  RiMicFill,
} from "react-icons/ri";
function App() {
  return (
    <div className=" min-h-screen grid grid-cols-1 xl:grid-cols-4 text-gray-300">
      <div className="hidden bg-[#1B2831] xl:flex flex-col ">
        {/*Profile*/}
        <div className="p-4 h-[15vh]">
          <div className="flex items-center justify-between  mb-4">
            <div>
              <img
                src="https://img.freepik.com/psd-gratis/estudiante-alegre-idea_1154-280.jpg"
                className="w-10 h-10 object-cover rounded-full"
              />
            </div>
            <div className="flex items-center gap-8 text-2xl text-gray-500">
              <RiLoader3Line className="hover:cursor-pointer" />
              <RiChatPollFill className="hover:cursor-pointer" />
              <RiMore2Fill className="hover:cursor-pointer" />
            </div>
          </div>
          <form className="w-full">
            <div className="relative">
              <RiSearchLine className="absolute top-1/2 -translate-y-1/2 left-4" />

              <input
                className="bg-[#0B131A] w-full rounded-full py-2 pl-10 pr-4 outline-none"
                placeholder="Search or start new chat"
              />
            </div>
          </form>
        </div>
        <div className=" h-[85vh] overflow-y-scroll">
          {/*Contact*/}
          <div className="p-4 flex items-center gap-4 bg-[#222C32] border-b border-[#222C32] hover:cursor-pointer">
            <img
              src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg?"
              className="w-11 h-11 object-cover rounded-full"
            />
            <div className="flex flex-1 justify-between">
              <div>
                <h1>Lydia Rodarte-Quayle</h1>
                <p className="text-gray-500 text-xs">
                  See you on Friday! Don't forget your monthly report
                </p>
              </div>
              <div className="text-sm text-gray-500">14:45</div>
            </div>
          </div>
          {/*Contacts*/}
          <div className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors cursor-pointer">
            <img
              src="https://img.freepik.com/foto-gratis/retrato-joven-confiado-gafas_171337-4841.jpg"
              className="w-11 h-11 object-cover rounded-full"
            />
            <div className="flex flex-1 justify-between">
              <div>
                <h1>James McGill</h1>
                <p className="text-gray-500 text-xs">
                  See you on Friday! Don't forget your monthly report
                </p>
              </div>
              <div className="text-sm text-gray-500">14:45</div>
            </div>
          </div>
          <div className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors cursor-pointer">
            <img
              src="https://img.freepik.com/foto-gratis/retrato-joven-confiado-gafas_171337-4841.jpg"
              className="w-11 h-11 object-cover rounded-full"
            />
            <div className="flex flex-1 justify-between">
              <div>
                <h1>James McGill</h1>
                <p className="text-gray-500 text-xs">
                  See you on Friday! Don't forget your monthly report
                </p>
              </div>
              <div className="text-sm text-gray-500">14:45</div>
            </div>
          </div>
          <div className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors cursor-pointer">
            <img
              src="https://img.freepik.com/foto-gratis/retrato-joven-confiado-gafas_171337-4841.jpg"
              className="w-11 h-11 object-cover rounded-full"
            />
            <div className="flex flex-1 justify-between">
              <div>
                <h1>James McGill</h1>
                <p className="text-gray-500 text-xs">
                  See you on Friday! Don't forget your monthly report
                </p>
              </div>
              <div className="text-sm text-gray-500">14:45</div>
            </div>
          </div>
          <div className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors cursor-pointer">
            <img
              src="https://img.freepik.com/foto-gratis/retrato-joven-confiado-gafas_171337-4841.jpg"
              className="w-11 h-11 object-cover rounded-full"
            />
            <div className="flex flex-1 justify-between">
              <div>
                <h1>James McGill</h1>
                <p className="text-gray-500 text-xs">
                  See you on Friday! Don't forget your monthly report
                </p>
              </div>
              <div className="text-sm text-gray-500">14:45</div>
            </div>
          </div>
          <div className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors cursor-pointer">
            <img
              src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg?"
              className="w-11 h-11 object-cover rounded-full"
            />
            <div className="flex-1 flex justify-between">
              <div>
                <h1>Lydia Rodarte-Quayle</h1>
                <p className="text-gray-500 flex items-center gap-2">
                  <RiCheckDoubleFill className="text-lg text-cyan-500" />{" "}
                  <RiCameraFill />
                </p>
              </div>
              <div className="text-sm text-gray-500">Yesterday</div>
            </div>
          </div>
          <div className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors cursor-pointer">
            <img
              src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg?"
              className="w-11 h-11 object-cover rounded-full"
            />
            <div className="flex-1 flex justify-between">
              <div>
                <h1>Lydia Rodarte-Quayle</h1>
                <p className="text-gray-500 flex items-center gap-2">
                  <RiCheckDoubleFill className="text-lg text-cyan-500" />{" "}
                  <RiCameraFill />
                  Image
                </p>
              </div>
              <div className="text-sm text-gray-500">Yesterday</div>
            </div>
          </div>
          <div className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors cursor-pointer">
            <img
              src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg?"
              className="w-11 h-11 object-cover rounded-full"
            />
            <div className="flex-1 flex justify-between">
              <div>
                <h1>Lydia Rodarte-Quayle</h1>
                <p className="text-gray-500 flex items-center gap-2">
                  <RiCheckDoubleFill className="text-lg text-cyan-500" />{" "}
                  <RiCameraFill />
                  Image
                </p>
              </div>
              <div className="text-sm text-gray-500">Yesterday</div>
            </div>
          </div>
          <div className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors cursor-pointer">
            <img
              src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg?"
              className="w-11 h-11 object-cover rounded-full"
            />
            <div className="flex-1 flex justify-between">
              <div>
                <h1>Lydia Rodarte-Quayle</h1>
                <p className="text-gray-500 flex items-center gap-2">
                  <RiCheckDoubleFill className="text-lg text-cyan-500" />{" "}
                  <RiCameraFill />
                  Image
                </p>
              </div>
              <div className="text-sm text-gray-500">Yesterday</div>
            </div>
          </div>
          <div className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors cursor-pointer">
            <img
              src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg?"
              className="w-11 h-11 object-cover rounded-full"
            />
            <div className="flex-1 flex justify-between">
              <div>
                <h1>Lydia Rodarte-Quayle</h1>
                <p className="text-gray-500 flex items-center gap-2">
                  <RiCheckDoubleFill className="text-lg text-cyan-500" />{" "}
                  <RiCameraFill />
                  Image
                </p>
              </div>
              <div className="text-sm text-gray-500">Yesterday</div>
            </div>
          </div>
          <div className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors cursor-pointer">
            <img
              src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg?"
              className="w-11 h-11 object-cover rounded-full"
            />
            <div className="flex-1 flex justify-between">
              <div>
                <h1>Lydia Rodarte-Quayle</h1>
                <p className="text-gray-500 flex items-center gap-2">
                  <RiCheckDoubleFill className="text-lg text-cyan-500" />{" "}
                  <RiCameraFill />
                  Image
                </p>
              </div>
              <div className="text-sm text-gray-500">Yesterday</div>
            </div>
          </div>
          <div className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors cursor-pointer">
            <img
              src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg?"
              className="w-11 h-11 object-cover rounded-full"
            />
            <div className="flex-1 flex justify-between">
              <div>
                <h1>Lydia Rodarte-Quayle</h1>
                <p className="text-gray-500 flex items-center gap-2">
                  <RiCheckDoubleFill className="text-lg text-cyan-500" />{" "}
                  <RiCameraFill />
                  Image
                </p>
              </div>
              <div className="text-sm text-gray-500">Yesterday</div>
            </div>
          </div>
        </div>
      </div>
      {/*Chats*/}
      <div className="xl:col-span-3">
        <header className="h-[8vh] bg-[#1B2831] p-4 flex item-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg?"
              className="w-10 h-10 object-cover rounded-full"
            />
            <div>
              <h1>Lydia Rodarte-Quayle</h1>
              <span className="text-gray-500 text-sm">Online</span>
            </div>
          </div>
          <div className="flex items-center gap-8 text-2xl text-gray-500">
            <RiSearchLine className="hover:cursor-pointer" />
            <RiLink className="hover:cursor-pointer" />
            <RiMore2Fill className="hover:cursor-pointer" />
          </div>
        </header>
        {/*Messages*/}
        <main className=" h-[84vh] overflow-y-scroll p-4">
          <div className="flex flex-col gap-5">
            {/*Message 1 (Lydia)*/}
            <div className="bg-[#1B2831] py-1 px-4 rounded-tr-xl rounded-br-xl rounded-bl-xl mb-2 w-min">
              <p>Hello</p>
            </div>
            {/*Message 2 (Sarah)*/}
            <div className="bg-[#054640] py-1 px-4 rounded-tl-xl rounded-bl-xl rounded-br-xl mb-2 flex xl:w-full w-1/2 float-right">
              <p>
                Dear Mrs. Rodarte-Quayle, good morning. I'm pleased to let you
                know that the meeting was successfully planned. The executives'
                meeting is set for 9 am, and their lunch at the San Martino
                restaurant is set for 12 pm. Additionally, Mr. Michael
                instructed me to inform him that he will be unable to attend due
                to illness.
              </p>
            </div>
            {/*Message 3*/}
            <div className="bg-[#1B2831] py-1 px-4 rounded-tr-xl rounded-br-xl rounded-bl-xl mb-2 flex w-1/2">
              <p>Fantastic ! Is the vehicle prepared to pick us up as well?</p>
            </div>
            {/*Message 4*/}
            <div className="bg-[#054640] py-1 px-4 rounded-tl-xl rounded-bl-xl rounded-br-xl mb-2 flex xl:w-full w-1/2 float-right">
              <p>
                Yes. The vehicle will arrive at the hotel at 7:30 in the
                morning. There is a possibility of a delay due to heavy rain but
                we will try to expedite the transport as best as possible.
              </p>
            </div>
            {/*Message 5*/}
            <div className="bg-[#1B2831] py-1 px-4 rounded-tr-xl rounded-br-xl rounded-bl-xl mb-2 flex w-1/2">
              <p>See you on Friday! Don't forget your monthly report </p>
            </div>
          </div>
        </main>
        {/*Send Messages*/}
        <div className=" h-[8vh] text-gray-500 flex items-center bg-[#1B2831] p-4">
          <div className="w-1/12 flex justify-center text-2xl md:gap-10">
            <RiEmotionHappyLine className="hover:cursor-pointer" />
          </div>
          <form className=" w-6/12 xl:w-10/12">
            <input
              type="text"
              className="bg-[#0B131A] w-full py-2 px-6 rounded-full outline-none text-gray-300"
              placeholder="Type your message here"
            />
          </form>
          <div className="w-1/12 flex justify-center text-2xl">
            <RiMicFill className="hover:cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
