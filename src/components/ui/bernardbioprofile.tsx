import "./bernardbioprofile.css";
import bernardbiophoto from "/public/imagesresized/bernardbiophoto.jpg";
import Image from 'next/image'
import Link from 'next/link'

export default function BernardBio() {
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
            <li>Playing on computer games, especially blood-bourne</li>
            <li>Cats</li>
            <li>Being retired</li>
            <li>Cooking</li>
            </ul>
          </section>
          <section className="photo">
            <figure className="pb-1/10">
              <Image id="Bernard_profile_photo" className="mb-[10%] mt-[20%] sm:w-[75%] md:w-[70%] md:mr-[35%] md:ml-[15%] border-slate-500 border-[5px] border-solid rounded-xl" src={bernardbiophoto} alt="" />
              <figcaption>
                <strong />
              </figcaption>
            </figure>
            <article>
              {" "}
              Since retirement, Bernard has taken up reading, an activity there was little time for during his working life. He has also started to learn firstly Spanish with Duolingo and has now progressed on to learning French and is making good progress. He has a full time post-retirement occupation looking after the garden in Cumbria and feeding Lennie, the cat.
              {/* Bernard was born in Billinge and grew up in Ashton-in-Makerfield,
              the second eldest of three boys. He attended Ashton Grammar School
              and at 16 years of age then went onto study for his A levels at
              Wigan Technical College. After applying for and accepting a place
              to study dentistry, he changed his mind and secured a place at
              Manchester University to study medicine. */}
            </article>
          </section>
          <section className="Dislikes">
            <ul className="list-disc text-left pl-6">
            <h2 className="font-bold">Dislikes:</h2>
            <li>Shopping</li>
            <li>Cruises</li>
            <li>Going out to work</li>
            <li>Foreign holidays</li>
            </ul>
          </section>
        </div>
        <section className="surprisingFacts">
          <h2 className="font-bold">Surprising Facts</h2>
          <ul className="list-disc text-left pl-6">
          <li>Bernard has an 'O' level in Astronomy.</li>
          <li>
            In 2013 was,together with Jill, voted by patients as the 2nd best GP
            practice in the UK for trust and confidence in their doctor
          </li>
          <li>
            Favourite saying is that of Groucho Marx who said 'I refuse to join
            any club which would have me as a member'
          </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
