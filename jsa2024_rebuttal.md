## Reviewer #1
### Reduction of CEFA - would something as simulation reduction work too? It might be better than determinization and minimization. Does determinization sometimes blow up?

We have not tried something like simulation minimization, but it is interesting advice. 

Yes, the determinization sometimes blow up because the size of the  result CEFA is exponential at worst case.


### Thirdly, I did not follow why the form (0,…,0,1,0,…,0), as for the union of two CEFAs, two registers as well as two kinds of transitions (\overrightarrow{v1},\overrightarrow{0},1,0) and (\overrightarrow{0},\overrightarrow{v2},0,1) are introduced.

This is mainly because the accepting condition is global. Assuming that we do not introduce new registers and transitions, we can not decide which accepting condition to use when arriving at a final state. We have added some notes at page 13.

### The Overapproximation on page 22. I am wandering about the transition from an original final state to qs that increments the new counter, and the subsequent self loop on qs. Does this also cause overapproximation? All extensions of the originally accepted words are accepted? If yes, it would deserve a comment.

No, this causes the autmoton reject some word supposing to be accepted. For example, the word 