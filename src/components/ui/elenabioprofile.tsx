import "./elenabioprofile.css";
import elenabiophoto4 from "/public/imagesresized/elenabiophoto4.jpg";
import Image from 'next/image'
import Link from 'next/link'

export default function ElenaBio() {
  return (
    <div>
      <div className="bg-[#7fffd4] pb-6">
        <section className="Profession">
          <h2>Profession</h2>
          <h3>Software Devops Engineer at the Economist</h3>
        </section>
        <div className="profileElena">
          <section className="Likes">
            <h2 className="font-bold">Likes:</h2>
            <ul className="list-disc text-left pl-6">
            <li>History</li>
            <li>Writing</li>
            <li>Hiking</li>
            <li>Video games</li>
            <li />
            </ul>
          </section>
          <section className="photo">
            <Image id="Elena_profile_photo" src={elenabiophoto4} alt="" />
            <article>
              {" "}
              Works for the Economist in their tech department. Initially
              studied chemistry before switching to computer science. A big
              advocate for LGBTQ+ rights, I was involved in several pride groups
              in the past.{" "}
            </article>
          </section>
          <section className="Dislikes">
            <h2 className="font-bold">Dislikes:</h2>
            <ul className="list-disc text-left pl-6">
            <li>Small dogs</li>
            <li>Loud places</li>
            <li>Excess drama </li>
            <li>Warm weather</li>
            </ul>
          </section>
          <section className="surprisingFacts">
            <h2 className="font-bold">Surprising Facts:</h2>
            <ul className="list-disc text-left pl-6">
            <li>Elena was once on the TV</li>
            </ul>
          </section>
          <section className="FavouriteBooks">
            <h2 className="font-bold">Favourite books:</h2>
            <ul className="list-disc text-left pl-6">
            <li>Discworld series by Terry Pratchett</li>
            </ul>
          </section>
          <section className="FavouriteMusic">
            <h2 className="font-bold">Favourite Music:</h2>
            <ul className="list-disc text-left pl-6">
            <li>Classic rock</li>
            <li>Indie pop</li>
            <li>Orchestral</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
