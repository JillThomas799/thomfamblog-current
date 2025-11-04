import "./harrybioprofile.css";
import lenniebiophoto5 from "/public/imagesresized/lenniebiophoto5.jpg";
import Image from 'next/image'
import Link from 'next/link'

export default function LennieBio() {
  return (
    <div>
      <div className="midnightblue">
        <section className="Profession">
          <h2>Profession</h2>
          <h3>Top Cat</h3>
        </section>

        <div className="profile">
          <section className="Likes">
            <h2>Likes</h2>
            <ul>
            <li>Mascarpone</li>
            <li>Butter</li>
            <li>Steak</li>
            <li>Sleeping</li>
            <li>Mice</li>
            <li>His home and garden</li>
            <li>Treats</li>
            </ul>
          </section>

          <section className="photo">
            <figure>
              <Image id="Lennie_profile_photo" src={lenniebiophoto5} alt="" />
              <figcaption>
                <strong></strong>
              </figcaption>
            </figure>
            <article>
              {" "}
              Lennie was born in Sheffield and was found abandoned on the
              streets of Sheffield, together with his sister and taken in by the
              RSPCA
            </article>
          </section>

          <section className="Dislikes">
            <h2>Dislikes</h2>
            <ul>
            <li>Catteries</li>
            <li>All vets</li>
            <li>Vaccinations</li>
            <li>Cardboard boxes</li>
            </ul>
          </section>
        </div>

        <section className="surprisingFacts">
          <h2>Surprising Facts</h2>
          <ul>
          <li>
            Lennie has been occasionally known to have overstepped his hunting
            capabilities when he caught a magpie and a rat
          </li>
          <li>
            Lennie appears to have injured his nose in the past. It is thought
            he may have been harmed when he was abandoned on the streets of
            Sheffield
          </li>
          </ul>
        </section>

        <section className="FavouriteMusic">
          <h2>Favourite Music</h2>
          <ul>
          <li>Einaudi</li>
          <li>Classic FM's Pet Classics</li>
          </ul>
        </section>

        <section className="FavouriteBooks">
          <h2>Favourite books</h2>
          <ul>
          <li>Judith Kerr, The Big Mog Collection</li>
          <li>Inga Moore, Six Dinner Sid</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
