
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"


const readinglistPage = () => (
  <Layout>
    <h1>Reading list</h1>
<div> 
    <ul> 
	<li> Joan Retallack - The Poethical Wager</li>
    	<li> Donald Davie - Articulating Energy</li>
    	<li> Hugh Kenner - The Pound Era</li>
    	<li> Guy Davenport - Geographies of the Imagination</li>
    	<li> Frank Kermode - Romantic Image</li>
    	<li> Marjorie Perloff - 21st Century Modernism</li> 
    	<li> Anne Carson - Eros the Bittersweet</li>
	<li> Louis-Ferdinand Celine - Journey to the End of Night</li>
	<li> Alain Robbe-Grillet - The Voyeur</li>
	<li> Mathias Enard - Zone</li>
	<li> Kathy Acker - Empire of the Senseless</li>
	<li> Ingebord Bachmann - Malina</li>
    </ul>
	</div>

	<div>
	<h1>Poetry</h1>
	<ul>
		<li>Carson</li>
		<li>Celan </li>
		<li>Cesaire </li>
		<li>Moore </li>
		<li>Olson </li>
		<li>Oppen </li>
		<li>Pound </li>
		<li>Prynne </li>
		<li>Riley </li>
		<li>Sinclair </li>
		<li>Zukofksy </li>
	</ul>
	</div>

	<div>
		<h1>Fiction</h1>
	<ul >
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
		<table style="width: 50%">
			<tr>
				<td>Author</td>
				<td>Book</td>
			</tr>
			<tr>
				<td>Pearl, Judea</td>
				Mtd>Causality</td>
			</tr>
			<tr>
				<td>Jaynes, Edwin T.</td>
				<td>Probability Theory: The Logic of Science</td>
			</tr>
			<tr>
				<td>Sivia, Devinder</td>
				<td>Data Analysis: A Bayesian Tutorial</td>
			</tr>
			<tr>
				<td>Hyndman, Rob</td>
				<td>Forecasting: Principles and Practice</td>
			</tr>
		</table>
	</div>
  </Layout>
)

export default readinglistPage
