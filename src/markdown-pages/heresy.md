---
slug: "/blog/heresy-of-randomness"
date: "2021-09-27"
title: "Complexity and Paraphrase DRAFT"
---

Cleanth Brooks’ The Well-Wrought Urn (1947) is a standard part of a University introduction to Literary Theory (at least where I went to school). Brooks is covered early on in such a course, generally among a cohort in the early 20th Century who wanted to develop a type of criticism which busied itself with the structure and form of poems, rather than their historical contexts or creator’s biographies. The hope was that by paying careful attention to the internal dynamics of a poem – how it creates cycles of tension and release, how it allows meaning to move and fluctuate – you might develop a serious academic discipline of Literary Studies which was Lawful and Objective. According to a particularly hackneyed type of Literary Theory 101, the rest of the 20th Century is a story of riposte and the deflation of the lofty (if reductive) aims of the New Critics and their ilk. Indeed, according to the rest of that reading list, they were somewhere between naïve and fascistic in their inclinations, and as criticism it’s definitely not without its faults, but one of Brooks’ ideas has stuck with me as a real good ‘un, the kind of idea that stands out from the churn of intellectual history as a rare, lasting contribution; The Heresy of Paraphrase.

This ‘heresy’ is found in claiming you know what a poem ‘says’, or, worse still, what it really says. What is poetic about a poem is irreducible to some ‘other’ statement;

“…the reader may well ask, is it not possible to frame a proposition, a statement, which will adequately represent the total meaning of a poem, that is, is it not possible to elaborate a summarizing proposition which will ‘say, briefly and in the form of a proposition, what the poem ‘says’ as a poem, a proposition which will say it fully and will say it exactly, no more and no less? Could not the poet, if he had chosen, have framed such a proposition? Cannot we as readers and critics frame such a proposition?” (188)

I have no idea if the long-windedness of this section is ironically referential, but his answer to the contained question is obviously ‘no’. He has many examples, and the essay is worth reading (as is the book, at least the first chapter on Donne’s ‘The Canonisation’), but the core of it is that a work of poetry is singular and in a meaningful sense, irreducible to anything other than itself. Its essence lies in all parts of itself – all the attitudes, all the techniques, all the contexts. So it isn’t ‘enough’ to describe The Odyssey as ‘a man goes on a long journey back from battle and then gets home’, but neither is it enough to describe it is

 

Why? Because any form of paraphrase involves removing one dimension of the poem, the essence of which lies in its unity. This is the issue with the structuralist-style approaches of James Frazer or Carl Jung; they may be entertaining, but they offer little understanding of the works under examination. The Odyssey and Star Wars might have some key things in common, but what is artful and important about each is surely what separates them (if your interest is Literature, and not Sociology).

 

PCA – Elvis and Nixon

 

To explain randomness, in a maths sense, it’s better to start with ‘algorithmic complexity’ (or Kolmogorov complexity). Simplified; The Kolmogorov complexity of a string of digits is the minimum length of the computer programme which could output that string. Slightly less simplified; the complexity of y given x is the minimal length of a binary programme which by means of x computes y on a certain asymptotically optimal machine (PML, Definition of Random Sequences, 602).

 

You can get a sense of it through comparison, just using words (which is obviously less accurate, but anyway). The phrase ‘positive whole numbers less than 10’ could be seen as a ‘programme’ which gives you

1 2 3 4 5 6 7 8 9

a list of positive whole numbers which are lower than 10. The programme-phrase here (positive whole numbers less than 10) is six words long, so has a ‘complexity’ of six. ‘Positive whole numbers less than 10 but greater than five’ would output

6 7 8 9

And would have a complexity of 10. That same string (6 7 8 9) could be given by a shorter phrase, though, like ‘positive whole numbers between five and 10’, which would have a complexity of seven, or ‘integers between five and 10’ which would have a complexity of five. For Kolmogorov and the gang, all of these terms were much more tightly defined in terms of ‘alphabets’ and ‘binary programmes’ so the complexity score is a lot less arbitrary than the one we’re using here. Note that we’re talking about ‘conditional complexity’, so you might say the ‘conditional complexity’ of the string 6 7 8 9 in terms of the language used by a non-mathematical poetry critic grasping at straws is equal to five.

 

Unlike a lot of mathematical ideas, I don’t think Kolmogorov complexity loses a lot of its use when it is removed from the strict formality of its origin (once you don’t do something stupid, like try and assign real numbers to what is now more of a metaphor than anything else). The more profound consequences might need to be left in their domain, but as a comparative idea it transfers fairly well. You could say that making Beouf bourguignon from the Julia Child recipe is ‘more complex’ than making tea from the Dara Kelly recipe (5 steps), but it would be a bit much to say it’s ‘5 times more complex’. After all, is “Add the tomato paste, garlic, herbs, and bacon rind” just one step, or is it four distinct steps? Should “use the Robbie Keane-Spurs mug if it’s morning time and the Robbie Keane LA Galaxy-mug if it’s evening time” be counted as a step at all? Should it be two? I’m going to avoid all this discussion, for now at least, and say you lose rigour but not principle when you take Kolmogorov out of the computer and start throwing him around the kitchen.

 

The other useful thing about this idea of complexity is that it means you can start talking about randomness in a way that’s reasonably well-defined; something is random if its complexity is as large as possible. A string of a thousand 0s can be given with the phrase ‘a thousand zeroes’, but imagine a string of 1,000 0s and 1s with each representing the outcome of a specific coin toss – there is no short way this string could be described without reference to itself. Random sequences cannot be constructed from a shorter programme, which is why 25,237 feels like a more ‘random’ number than 11,111, even though the chances of you getting either by blindly* selecting an integer between 0 and 100,000 is the same.

 

This reminds me of that trick when smug hacks psychologists would ask ‘which outcome is less likely from ten coin flips:

HHHHHHHHHH

or

HTHTHHHTTT

And you, like an idiot, would pick the first one. While they both have the same likelihood (0.5^-10) the first one is less complex. It could be given by ‘H x10’ or ’10 Hs’, whereas the other can only accurately be described by reproducing it. You could say ‘5Hs and 5Ts’, or ‘half of each’, but that doesn’t accurately describe the outcomes. The only way to do that is by reproducing it; HTHTHHHTTT. This difference becomes really apparent at higher orders of magnitude (why PML calls it asymptotic).

 

 

Maybe poetry as a verb (we’re back in trendy territory now) is the drive from a centre of predictability and reducibility away, out towards a singular meaning, and a meaning which involves as many of the poem’s elements, ‘propositions, metaphors, symbols’ as possible. The perfect poem might somehow balance each of these elements in terms of their explanatory power – no ‘one’ approach would get at the core of the meaning, which would be constantly diffusing itself ‘over’ its components. It would defy any kind of logical ‘slicing’. An appraisal of poetic meaning is like an explanation of data; it maximises entropy over possible ‘elements of explanation’ while bound by certain constraints of parsimony (e.g. string length, in PML’s example).

 

This type of suspicious hermeneutics is typical of what follows the New Critics in Literary Theory 101, and one of the clearest examples is offered (uncharacteristically, disappointingly) by Slavoj Zizek in his discussion of *The Sound of Music*;

"At the political level, small honest democratic Austrians resisting the Nazi occupation of Austria in 1938. But look closely, at the movie's texture, and you will see the movie quite differently... If you look at how Austrians are depicted in the movie, to cut a long story short, you will see they are depicted as 'small-is-beautiful', provinicial-ish fascists. Their idiocy is emphasised as local, folkloric dresses, anti-intellectual and rooted in narrow rural life. Look how the Nazis are represented, not as soldiers  but as managers, bureaucrats, exquisitely dressed with short moustaches, smoking expensive cigarettes, almost a caricature of cosmopolitan, decadent, corrupted Jew. At the level of simple narrative reality, we get one image - democratic resistance to Nazism. But at the level of 'virtual' texture, the micro, we get practically the opposite message - honest fascists resisting decadent Jewish takeover.

 


