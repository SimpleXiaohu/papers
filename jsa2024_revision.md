# An Efficient String Solver for String Constraints with Regex-Counting and String-Length

## Reviewer #1 
### Comments
I have only some mild criticism and suggestions:

#### I think that the fact that Kleene star occurs in about 70% of Python projects is cited in a misleading way (page 2, bottom). It sounds as an argument for relevance of this work, however, the presented techniques do not improve handling of Kleene star (or plus). They do improve handling of "the other forms of counting", but that is only the 20%.
Answer: We have removed the data about Kleene star on page 2, to avoid misunderstanding.

#### On the other hand, please, provide a link to the benchmark if at all possible. Unlike the previous point, I consider this relatively important (reproducibility, extensibility of the experiment, the benchmark could be used by others).
Answer: We have provided the links to the source code and benchmarks on page 4.

#### I think that CEFA are a variation on the Parikh automata. It would be good to mention the relation in Related work.
Answer: We have mentioned Parikh automata on page 5.

#### Reduction of CEFA - would something as simulation reduction work too? It might be better than determinization and minimization. Does determinization sometimes blow up?
Answer: We have not tried simulation minimization, but it is interesting advice. The determinization sometimes blows up because, in the worst case, the size of the result CEFA is exponential.

#### The Overapproximation on page 22. I am wandering about the transition from an original final state to qs that increments the new counter, and the subsequent self loop on qs. Does this also cause overapproximation? All extensions of the originally accepted words are accepted? If yes, it would deserve a comment.
Answer: No, this causes the automaton to reject some words supposed to be accepted. 
For example, assuming the automaton has two states q_0, q_1 where q_0 is the initial state and q_1 is the final state, and there is a transition from q_0 to q_1 labeled by a. The accepted condition is true. The only accepted word of the automaton is "a", so the complement of it accepts all words except "a". But if the transition is added from the original final state q_1 to q_s and the subsequent self-loop on q_s, words from language aa* are rejected because we can not satisfy the new accepted condition 1 -> false. 

#### I had troubles to understand the section about optimized model generation. Maybe stating what the technical problem that it is solving is in a more dumb proof way would help.
Answer: Not done yet, zhilin todo

#### The experimental counting constraints and length constraints you introduce, e.g. those on top of page 26. Could you comment a bit more on what is the ratio of introducing exactly these? Is it motivated by something practical?
Answer: We have mentioned that the number of introduced instances is 1000 and all of them are generated randomly without something practical on page 28.

#### I would be very much interested in how Z3-Noodler works on the benchmark. The paper is fine as is, I do not insist on this at all, the conference version appeared before Noodler and the current experimental results show the merit of the proposed techniques clearly enough. But in case the authors have nothing better to do and seek ways of fighting boredom, it would be interesting to see the comparison.
Answer: As you have said, the conference version appeared before Noodler, so we plan to experiment Z3-Noodler in future work.


### Typos and little things:
- page 2, third line - "...which is possibly ..." is not a sentence
- page 2, second paragraph "3040%"
- page 12, bottom: the automata A1 and A2 have a single initial state, but the definition works with a set of initial states. This may occur on more places.
- The font in table 5 is strangely huge.
- page 15, the modified Thompson construction. Maybe one should mention that similar constructions, and also alternatives, were proposed elsewhere (the papers on pattern matching and automata with counters might have references).

Answer: All the typos are corrected in the responding place.





## Reviewer #2 
### Comments
#### Line 2, Para 2, Page 2: "3040%" should be "30-40%"
Answer: We have fixed this on page 2.

#### Better to place Section 3 (Preliminaries) before Section 2 (Overview), as some notation introduced in Section 2 is explained in Section 3.
Answer: We have rearranged these two sections on page 5.

#### Line 7, Para 3, Page 11: "one of the following holds …" . Better to rephrase the conditions, as they are likely to lead to misunderstandings.
Answer: We have added some mark numbers to make it more clear on page 11.

#### Para 2, Page 14: the register component is absent for the concatenation.
Answer: We have added the missed register component on page 14.

#### Para -1, Page 18: better to explain how to solve the satisfiability of the formula and derive a solution, (even though I found that it is discussed in Section 8).
Answer: We have added an explanation about deriving a solution on page 18.

#### Para 3, Page 20: Firstly, some U_{A_{ufld_{*1*}(e)}} should be U_{A_{ufld_{*2*}(e)}}, while some U_{A_{ufld_{*2*}(e)}} should be U_{A_{ufld_{*1*}(e)}}. Please check this carefully. Secondly, what is r'?
Answer: We have corrected the wrong subscript in such U_{A_{ufld_{*1*}(e)}} things and corrected the r' to rnum_1(e) on page 22.

#### Thirdly, I did not follow why the form (0,…,0,1,0,…,0), as for the union of two CEFAs, two registers as well as two kinds of transitions (\overrightarrow{v1},\overrightarrow{0},1,0) and (\overrightarrow{0},\overrightarrow{v2},0,1) are introduced.
Answer: This is mainly because the accepting condition is global. Assuming that we do not introduce new registers and transitions, we can not distinguish accepting conditions of two automata. We have added an explanation on page 13.

#### Sec 7.2, Page 21: better to explain how to combine these two approximation. By the way, utilizing an under-approximation may result in a false negative, whereas employing an over-approximation could lead to a false positive. Please engage in a discussion regarding this matter.
Answer: We have added the detail of the combination of under- and over-approximation on page 25. Since we utilize the decision procedure if under-approximation gives an unsat answer and over-approximation gives a sat answer, we finally will get a complete and sound result.

#### Sec 9, Page 26: It is advisable to conduct a comprehensive analysis regarding the complexity of problem instances for further clarification, with respect to Figure 4. For example, one should consider the depth of counting nesting, the number of regex variables (is it sufficient in practice to utilize just a single variable x?), as well as constraints associated with string length—not limited to a singular condition such as |x| > 10/50.
Answer: We have added the complexity analysis on page 19.