
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"


const readinglistPage = () => (
  <Layout>
	<Seo title="Reading List"/>
    <h1>Reading lists</h1>
<div> 
    <ul aria-label="Criticism"> 
		<li> Joan Retallack - The Poethical Wager</li>
    		<li> Donald Davie - Articulating Energy</li>
    		<li> Guy Davenport - Geography of the Imagination</li>
    		<li> Frank Kermode - Romantic Image</li>
    		<li> Marjorie Perloff - 21st Century Modernism</li>
		<li> Oren Izenberg - Being Numerous</li>
		<li> Alex Ross - The Rest is Noise</li>
    </ul>
	</div>

	<div>
	<ul aria-label="Poets">
		<li>Carson, Anne</li>
		<li>Celan, Paul </li>
		<li>Cesaire, Aime </li>
		<li>Moore, Marianne </li>
		<li>Olson, Charles </li>
		<li>Oppen, George </li>
		<li>Pound, Ezra </li>
		<li>Prynne, J. H. </li>
		<li>Riley, Denise </li>
		<li>Sinclair, Iain </li>
		<li>Zukofksy, Louis </li>
	</ul>
	</div>

	<div>
		<ul aria-label="Shelf">
			<li> Louis-Ferdinand Celine - Journey to the End of Night</li>
			<li> Mathias Enard - Zone</li>
			<li> Kathy Acker - Empire of the Senseless</li>
			<li> Ingeborg Bachmann - Malina</li>
			<li> Don DeLillo - Americana</li>
			<li> Henry James - The Golden Bowl</li>
		</ul>
	</div>
	<div>
	<ul aria-label="Fiction">

		<li>Bernhard, Thomas - Concrete/The Loser </li>
		<li>Bolano, Roberto - The Savage Detectives</li>
		<li>Cohen, Joshua - Witz/Moving Kings </li>
		<li>Conrad, Joseph - Nostromo </li>
		<li>Ernaux, Annie - The Years</li>
		<li>Gaddis, William - JR </li>
		<li>Gombrowicz, Witold - Cosmos</li>
		<li>Guimaraes Rosa, Joao - The Devil to Pay in the Backlands</li>
		<li>Krasznahorkai, Laszlo - Satantango</li>
		<li>Lewis, Wyndham - Tarr/Childermass</li>
		<li>Quin, Ann - Three </li>
		<li>Roth, Philip - Sabbath's Theatre </li>
		<li>Szentkuthy, Miklos - Prae</li>
		
	</ul>
	</div>
	<div>
		<ul aria-label="Probability & Statistics">
				<li>Pearl, Judea - Causality</li>
				<li>Jaynes, Edwin T. - Probability Theory: The Logic of Science</li>
				<li>Sivia, Devinder - Data Analysis: A Bayesian Tutorial</li>
				<li>Hyndman, Rob - Forecasting: Principles and Practice</li>
				<li>Gelman et al. - Bayesian Data Analysis</li>
				<li>Feller - Introduction to Probability Theory and its Applications</li>
				<li>Freedman, David, Robert Pisani and Roger Purves - Statistics</li>
			</ul>
	</div>
	<div>
		<ul aria-label="Maths">
			<li>Abbott, Stephen - Understanding Analysis</li>
			<li>Chiswell, Ian and Wilfrid Hodges - Mathematical Logic</li>
			<li>Takeuti, Gaisi - Proof Theory</li>
			<li>Girard, Jean-Yves - The Blind Spot</li>
			<li>Mendelson, Bert - Introduction to Topology</li>
			<li>Janich, Klaus - Topology</li>
			<li>Graham, Ronald L., Donald E. Knuth and Oren Patashnik - Concrete Mathematics</li>
			<li>Polya, George - How to Solve it</li>
			<li>Halmos, Paul - Naive Set Theory</li>
			<li>Strang, Gil - Linear Algebra</li>
			<li>Jech, Thomas - Set Theory</li>
		</ul>
	</div>
	<div>
		<ul aria-label="Computing">
			<li>Boolos, George and Richard Jeffrey - Computability and Logic</li>
			<li>Davis, Martin - Computability and Unsolvability</li>
			<li>Abelson, Hal, Jerry Sussman and Julie Sussman - Structure and Interpretation of Computer Programmes</li>
			<li>Sipser, Introduction to the Theory of Computation</li>
		</ul>
	</div>
  </Layout>
)

export default readinglistPage
