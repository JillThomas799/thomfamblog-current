import "./elenabioprofile.css";
import elenabiophoto5 from "/public/imagesresized/elenabiophoto5.jpg";
import Image from 'next/image'
import Link from 'next/link'

// export default function ElenaBio() {
//   return (
//     <div>
//       <div className="bg-[#191970]">
//         <section className="Profession">
//           <h2 className="font-bold">Profession</h2>
//           <h3 className="font-bold">Software Devops Engineer at the Economist</h3>
//         </section>
//         <div className="flex flex-col items-center">
//           <section className="Likes">
//             <h2 className="font-bold">Likes:</h2>
//             <ul className="list-disc text-left pl-6">
//             <li>History</li>
//             <li>Writing</li>
//             <li>Hiking</li>
//             <li>Video games</li>
//             <li />
//             </ul>
//           </section>
//           <section className="photo">
//             <Image id="Elena_profile_photo" src={elenabiophoto4} alt="" />
//             <article>
//               {" "}
//               Works for the Economist in their tech department. Initially
//               studied chemistry before switching to computer science. A big
//               advocate for LGBTQ+ rights, I was involved in several pride groups
//               in the past.{" "}
//             </article>
//           </section>
//           <section className="Dislikes">
//             <h2 className="font-bold">Dislikes:</h2>
//             <ul className="list-disc text-left pl-6">
//             <li>Small dogs</li>
//             <li>Loud places</li>
//             <li>Excess drama </li>
//             <li>Warm weather</li>
//             </ul>
//           </section>
//           <section className="surprisingFacts">
//             <h2 className="font-bold">Surprising Facts:</h2>
//             <ul className="list-disc text-left pl-6">
//             <li>Elena was once on the TV</li>
//             </ul>
//           </section>
//           <section className="FavouriteBooks">
//             <h2 className="font-bold">Favourite books:</h2>
//             <ul className="list-disc text-left pl-6">
//             <li>Discworld series by Terry Pratchett</li>
//             </ul>
//           </section>
//           <section className="FavouriteMusic">
//             <h2 className="font-bold">Favourite Music:</h2>
//             <ul className="list-disc text-left pl-6">
//             <li>Classic rock</li>
//             <li>Indie pop</li>
//             <li>Orchestral</li>
//             </ul>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// }
export default function ElenaBio() {
  return (
    <div>
      <div className="bg-[#191970]">
        <section className="Profession">
          <h2 className="font-bold">Profession</h2>
          <h3 className="font-bold">Software Devops Engineer working for the Economist</h3>
        </section>

        <div className="flex flex-col sm:flex sm:flex-row">
          <section className="Likes">
            <h2 className="font-bold">Likes:</h2>
            <ul className="list-disc text-left pl-6">
            <li>History</li>
            <li>Writing</li>
            <li>Hiking</li>
            <li>Video Games</li>
            </ul>
          </section>

          <section className="photo">
            <figure>
              <Image id="Elena_profile_photo" className="mb-[10%] mt-[20%] sm:w-[75%] md:w-[70%] md:mr-[35%] md:ml-[15%] border-slate-500 border-[5px] border-solid rounded-xl" src={elenabiophoto5} alt="" />
              <figcaption>
                <strong></strong>
              </figcaption>
            </figure>
            <article>
              {" "}
               Works for the Economist in their tech department. Initially
              studied chemistry before switching to computer science. A big              advocate for LGBTQ+ rights, I was involved in several pride groups
              in the past.{" "}
            </article>
          </section>

          <section className="Dislikes">
            <h2 className="font-bold">Dislikes:</h2>
            <ul className="list-disc text-left pl-6">
            <li>Small dogs</li>
            <li>Loud places</li>
            <li>Excess drama</li>
             <li>Warm weather</li>
            </ul>
          </section>
        </div>

        <section className="surprisingFacts">
          <h2 className="font-bold">Surprising Facts:</h2>
          <ul className="list-disc text-left pl-6">
          <li>Jill has an additional degree in European Studies</li>
          <li>
            Elena was once on Tv. She is also a writer.{" "}
          </li>
          </ul>
        </section>

        <section className="FavouriteBooks">
          <h2 className="font-bold">Favourite books:</h2>
          <ul className="list-disc text-left pl-6">
          <li>
            Anatoli Rybakov, Children of the Arbat trilogy: 'Children of the
            Arbat', 'Fear' and 'Dust and Ashes'.
          </li>
          <li>Ellie Griffiths, the Ruth Galloway series</li>
          <li>Melvyn Bragg, 'Back in the Day' </li>
          <li>
            M W Craven, Washington Poe series, of which my favourite is 'Dead
            Ground'
          </li>
          <li>Polly Morland, 'A Fortunate Woman' A Country Doctor's Story</li>
          </ul>
        </section>

        <section className="FavouriteMusic">
          <h2 className="font-bold">Favourite Music:</h2>
          <ul className="list-disc text-left pl-6">
          <li>Classic rock</li>
          <li>Indie Pop</li>
          <li>
            Orchestral
          </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
