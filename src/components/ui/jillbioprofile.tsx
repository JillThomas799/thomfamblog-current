import "./jillbioprofile.css";
import jillbiophoto5 from "/public/imagesresized/jillbiophoto5.jpg";
import Image from 'next/image'
import Link from 'next/link'

export default function JillBio() {
  return (
    <div>
      <div className="bg-[#191970]">
        <section className="Profession">
          <h2 className="font-bold">Profession</h2>
          <h3 className="font-bold">Retired General Practitioner</h3>
        </section>

        <div className="flex flex-col sm:flex sm:flex-row">
          <section className="Likes">
            <h2 className="font-bold">Likes:</h2>
            <ul className="list-disc text-left pl-6">
            <li>Family</li>
            <li>Countryside</li>
            <li>Peace and quiet</li>
            <li>Cats</li>
            <li>Studying software and foreign languages</li>
            <li>Europe</li>
            </ul>
          </section>

          <section className="photo">
            <figure>
              <Image id="Jill_profile_photo" className="mb-[10%] mt-[20%] sm:w-[75%] md:w-[70%] md:mr-[35%] md:ml-[15%] border-slate-500 border-[5px] border-solid rounded-xl" src={jillbiophoto5} alt="" />
              <figcaption>
                <strong></strong>
              </figcaption>
            </figure>
            <article>
              {" "}
              Jill grew up near Wigan. She has from a young age had a love of
              classical music, opera and ballet and when younger learnt to play
              the piano and violin. From the age of 13 years she wanted to
              become a doctor. After obtaining the necessary A levels in
              sciences, she successfully gained a place to study medicine at
              Manchester Medical School.
            </article>
          </section>

          <section className="Dislikes">
            <h2 className="font-bold">Dislikes:</h2>
            <ul className="list-disc text-left pl-6">
            <li>Unkindness</li>
            <li>Intolerance of the underdog</li>
            <li>Arrogance</li>
            </ul>
          </section>
        </div>

        <section className="surprisingFacts">
          <h2 className="font-bold">Surprising Facts:</h2>
          <ul className="list-disc text-left pl-6">
          <li>Jill has an additional degree in European Studies</li>
          <li>
            At the age of 22 years, and never having flown before, Jill flew on
            her own out to Melbourne Australia for 3 months to study at
            Melbourne children's Hospital.{" "}
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
          <li>Paganini Violin Concertos</li>
          <li>Chopin piano concertos numbers 1 and 2</li>
          <li>
            Antonio Vivaldi 12 Violin Concertos Op3,the 'L'estro Armonico' set,
            of which the Concerto for 2 violins in A minor, RV255 is my
            favourite
          </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
