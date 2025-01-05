An Efficient String Solver for String Constraints with Regex-Counting and String-Length

We thank the reviewers for their valuable comments and suggestions. We revise the paper according to these comments and suggestions (the revised parts are highlighted in the red color). In the sequel, let us describe more specifically how we address the reviewers' comments and suggestions.  

Reviewer #1 

Q1. I think that the fact that Kleene star occurs in about 70% of Python projects is cited in a misleading way (page 2, bottom). It sounds as an argument for relevance of this work, however, the presented techniques do not improve handling of Kleene star (or plus). They do improve handling of "the other forms of counting", but that is only the 20%.

A1: We have removed the statistics about Kleene star. Thanks for raising this issue. 

Q2. Please, provide a link to the benchmark if at all possible. 

A2: We provide the links to the tool and the benchmarks at the bottom of page 4.

Q3. I think that CEFA are a variation on the Parikh automata. It would be good to mention the relation in Related work.

A3. We mention the relation in related work.

Q4. Reduction of CEFA - would something as simulation reduction work too? It might be better than determinization and minimization. Does determinization sometimes blow up?

A4. Thanks for pointing out this direction. We shall explore whether simulation relation helps to reduce the automata sizes in the future. Although determinization incurs exponential blow up in the worst case, we found that it is usually not the case in practice. 

Q5. The Overapproximation on page 22. I am wandering about the transition from an original final state to qs that increments the new counter, and the subsequent self loop on qs. Does this also cause overapproximation? All extensions of the originally accepted words are accepted? If yes, it would deserve a comment.

A5. No, it is not. For instance, let us consider a simple CEFA A (actually an NFA) that has exactly one transition (q0, a, q1), where q0 is the initial state and q1 is the final state. If we construct B by adding a register r', a state qs, and transitions (q1, a, qs, 1) and (qs, a, qs, 0), as suggested, and setting the accepting condition to be r' = 1 -> not alpha equiv r' = 1 -> false equiv not r' = 1. Then the string aa belongs to the complement of Language(A), but is *not* accepted by B. In our construction, aa is accepted by B with the help of the transition (q1, a, qs, 0). 

Q6. I had troubles to understand the section about optimized model generation. Maybe stating what the technical problem that it is solving is in a more dumb proof way would help.

A6. We have revised Section 8 to make it more structured to ease the understanding. In particular, the model construction is formulated explicitly as solving the reachability problem in a finite transition system and has been moved to Section 6. In Section 8, we show how we optimize the searching process when solving the reachability problem. 

Q7. The experimental counting constraints and length constraints you introduce, e.g. those on top of page 26. Could you comment a bit more on what is the ratio of introducing exactly these? Is it motivated by something practical?
A7: We have added a paragraph in the end of Page 27 to explain the choices of templates in NestC benchmark suite.

Q8. I would be very much interested in how Z3-Noodler works on the benchmark. The paper is fine as is, I do not insist on this at all, the conference version appeared before Noodler and the current experimental results show the merit of the proposed techniques clearly enough. But in case the authors have nothing better to do and seek ways of fighting boredom, it would be interesting to see the comparison.
A8. Thank the reviewer for suggesting this. Since the paper is already lengthy in some sense, we decide not to do the experimental comparison in this submission and leave it as future work.  


Q9. - page 2, third line - "...which is possibly ..." is not a sentence

A9. We remove "which is possibly ..."

Q10. page 2, second paragraph "3040%"

A10. Changed to "30-40%". 

Q11. page 12, bottom: the automata A1 and A2 have a single initial state, but the definition works with a set of initial states. This may occur on more places.

A11. Change the single initial state to set of initial states. 

Q12. The font in table 5 is strangely huge.
A12. Changed the font. 

Q13. page 15, the modified Thompson construction. Maybe one should mention that similar constructions, and also alternatives, were proposed elsewhere (the papers on pattern matching and automata with counters might have references).

A13. In page 15, we add a reference to model counting operators with counters. 



Reviewer #2 

Q1. Line 2, Para 2, Page 2: "3040%" should be "30-40%"
A1. Add "-" betweeen 30 and 40. 

Q2. Better to place Section 3 (Preliminaries) before Section 2 (Overview), as some notation introduced in Section 2 is explained in Section 3.
A2. Moved "Preliminaries" before "Overview" as suggested. 

Q3. Line 7, Para 3, Page 11: "one of the following holds …" . Better to rephrase the conditions, as they are likely to lead to misunderstandings.
A3. Add the numbers before the three conditions to avoid the misunderstandings. 

Q4. Para 2, Page 14: the register component is absent for the concatenation.
A4. Add the register component as suggested. 

Q5. Para -1, Page 18: better to explain how to solve the satisfiability of the formula and derive a solution, (even though I found that it is discussed in Section 8).
A5. We add Step 5 in the end of Section 6 to show how to construct a solution. 

Q6. Para 3, Page 20: Firstly, some U_{A_{ufld_{*1*}(e)}} should be U_{A_{ufld_{*2*}(e)}}, while some U_{A_{ufld_{*2*}(e)}} should be U_{A_{ufld_{*1*}(e)}}. Please check this carefully. Secondly, what is r'? Thirdly, I did not follow why the form (0,…,0,1,0,…,0), as for the union of two CEFAs, two registers as well as two kinds of transitions (\overrightarrow{v1},\overrightarrow{0},1,0) and (\overrightarrow{0},\overrightarrow{v2},0,1) are introduced.
A6. We have rewritten Section 7.1 to remove some inaccuracies. In particular, more rnum_2(e) is changed to vnum_2(e) to estimate the alphabet size in U_{A_{ufld_2(e)}}. Moreover, more comments are added in the inductive computation of snum'_1(e_1) and (snum'_2(e_1), vnum'_2(e_1)) to ease the understanding. 


Q7. Sec 7.2, Page 21: better to explain how to combine these two approximations. By the way, utilizing an under-approximation may result in a false negative, whereas employing an over-approximation could lead to a false positive. Please engage in a discussion regarding this matter.
A7. We add a paragraph in the end of Section 7 to describe how we combine the under- and over-approximations. 

Q8. Sec 9, Page 26: It is advisable to conduct a comprehensive analysis regarding the complexity of problem instances for further clarification, with respect to Figure 4. For example, one should consider the depth of counting nesting, the number of regex variables (is it sufficient in practice to utilize just a single variable x?), as well as constraints associated with string length—not limited to a singular condition such as |x| > 10/50.
A8. In the last paragraph of Page 27, we add the explanation of the choices of the templates. The templates in NestC benchmark suite are mainly used to evaluate the nestings of counting operators as well as the nestings of counting and complement operators. Since in practice, the depth of counting nesting is usually small and the number of string variables is also small, we resrict the templates to nesting depth 1 and one string variable. Althought we thank the reviewer for raising this issue, we think that it is a substantial amount of work to be done and we prefer leaving this as future work.  