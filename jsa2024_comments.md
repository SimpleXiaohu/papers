# An Efficient String Solver for String Constraints with Regex-Counting and String-Length

## Reviewer #1 
### Summary
The paper extends the string solver OSTRICH and the underlying decision procedure with a capability of efficient handling regular expressions with counting (such "something{1000}"), which can e asily become a performance bottleneck for string solvers.

The idea is to encode counting in automata using simple counters (the idea has been extensively studied in regular pattern matching, but the application in string solving is new).

This neatly fits into the framework for handling string length constraints using so called cost enriched automata, introduced earlier by some of the authors (when the counting is not nested and not under a complement). The counters are never expanded and are ultimately discharged and solved in the form of LIA formulae. The state space blow up that would otherwise occur because of counting is hence avoided. The paper confirms this experimentally, by showing that a version of OSTRICH extended with this techniques is far superior on benchmarks with counting than the original, and often better than most of the state of the art solvers.

The technique is relevant also for other methods than that of OSTRICH.

Overall, I think this is a nice paper. It also has sufficient amount of new content respective to the conference version (optimizations and extended experiment).

### Comments
I have only some mild criticism and suggestions:

~~I think that the fact that Kleene star occurs in about 70% of Python projects is cited in a misleading way (page 2, bottom). It sounds as an argument for relevance of this work, however, the presented techniques do not improve handling of Kleene star (or plus).
They do improve handling of "the other forms of counting", but that is only the 20%.~~

~~On the other hand, please, provide a link to the benchmark if at all possible. Unlike the previous point, I consider this relatively important (reproducibility, extensibility of the experiment, the benchmark could be used by others).~~

~~I think that CEFA are a variation on the Parikh automata. It would be good to mention the relation in Related work.~~

~~Reduction of CEFA - would something as simulation reduction work too? It might be better than determinization and minimization. Does determinization sometimes blow up?~~

~~The Overapproximation on page 22. I am wandering about the transition from an original final state to qs that increments the new counter, and the subsequent self loop on qs. Does this also cause overapproximation? All extensions of the originally accepted words are accepted? If yes, it would deserve a comment.~~

~~I had troubles to understand the section about optimized model generation. Maybe stating what the technical problem that it is solving is in a more dumb proof way would help.

~~The experimental counting constraints and length constraints you introduce, e.g. those on top of page 26. Could you comment a bit more on what is the ratio of introducing exactly these? Is it motivated by something practical?~~

I would be very much interested in how Z3-Noodler works on the benchmark. The p aper is fine as is, I do not insist on this at all, the conference version appeared before Noodler and the current experimental results show the merit of the proposed techniques clearly enough. But in case the authors have nothing better to do and seek ways of fighting boredom, it would be interesting to see the comparison.


Typos and little things:
~~page 2, third line - "...which is possibly ..." is not a sentence~~
~~page 2, second paragraph "3040%"~~
~~page 12, bottom: the automata A1 and A2 have a single initial state, but the definition works with a set of initial states. This may occur on more places.~~
~~The font in table 5 is strangely huge.~~
~~page 15, the modified Thompson construction. Maybe one should mention that similar constructions, and also alternatives, were proposed elsewhere (the papers on pattern matching and automata with counters might have references).~~






## Reviewer #2 
### Summary
Counting is a frequently utilized feature in regular expressions (regex) that quantifies the number of matches for sub-patterns. This paper presents an automata-based approach to addressing string constraints that involve regex counting and string length. The main idea is to symbolically represent the counting operators using registers within automata, rather than explicitly unfolding them, thereby mitigating the state explosion problem. Experimental results demonstrate that this approach achieves superior performance compared to state-of-the-art solvers.

### Comments
~~Line 2, Para 2, Page 2: "3040%" should be "30-40%"~~

~~Better to place Section 3 (Preliminaries) before Section 2 (Overview), as some notation introduced in Section 2 is explained in Section 3.~~

~~Line 7, Para 3, Page 11: "one of the following holds …" . Better to rephrase the conditions, as they are likely to lead to misund erstandings.~~

~~Para 2, Page 14: the register component is absent for the concatenation.~~

~~Para -1, Page 18: better to explain how to solve the satisfiability of the formula and derive a solution, (even though I found that it is discussed in Section 8).~~

~~Para 3, Page 20: Firstly, some U_{A_{ufld_{*1*}(e)}} should be U_{A_{ufld_{*2*}(e)}}, while some U_{A_{ufld_{*2*}(e)}} should be U_{A_{ufld_{*1*}(e)}}. Please check this carefully.
Secondly, what is r'?~~

~~Thirdly, I did not follow why the form (0,…,0,1,0,…,0), as for the union of two CEFAs, two registers as well as two kinds of transitions (\overrightarrow{v1},\overrightarrow{0},1,0) and (\overrightarrow{0},\overrightarrow{v2},0,1) are introduced.~~

~~Sec 7.2, Page 21: better to explain how to combine these two approximation. By the way, utilizing an under-approximation may result in a false negative, whereas employing an over-approximation could lead to a fal se positive. Please engage in a discussion regarding this matter.~~

~~Sec 9, Page 26: It is advisable to conduct a comprehensive analysis regarding the complexity of problem instances for further clarification, with respect to Figure 4. For example, one should consider the depth of counting nesting, the number of regex variables (is it sufficient in practice to utilize just a single variable x?), as well as constraints associated with string length—not limited to a singular condition such as |x| > 10/50.~~ 


## The E-mail from JSA:
Thank you for submitting your manuscript to Journal of Systems Architecture.

The review process of your manuscript has been completed. Based on the opinions of the reviewers and the Associate Editor in charge, your manuscript requires a Minor Revision. Please resubmit your manuscript by **January 01, 2025**.
This is the standard time expected by the journal. If you require additional time please contact the editors.

When revising your manuscript, please consider all issues mentioned in the reviewers' comments carefully: **please outline every change** made in response to their comments and provide suitable rebuttals for any comments not addressed. Please provide the source files (WORD or LaTeX) for the manuscript under the item type "Manuscript/latex source file". as well as photos and biographies of all authors.

To submit your revised manuscript go to https://www.editorialmanager.com/jsa/ and log in as an Author where you will see a menu item called 'Submission Needing Revision'.

Research Elements (optional)
This journal encourages you to share research objects - including your raw data, methods, protocols, software, hardware and more – which support your original research article in a Research Elements journal. Research Elements are open access, multidisciplinary, peer-reviewed journals which make the objects associated with your research more discoverable, trustworthy and promote replicability and reproducibility. As open access journals, there ma y be an Article Publishing Charge if your paper is accepted for publication. Find out more about the Research Elements journals at https://www.elsevier.com/authors/tools-and-resources/research-elements-journals?dgcid=ec_em_research_elements_email.


I look forward to receiving your revised manuscript.