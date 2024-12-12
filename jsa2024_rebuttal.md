## Reduction of CEFA - would something as simulation reduction work too? It might be better than determinization and minimization. Does determinization sometimes blow up?

We have not tried something like simulation minimization, but it is interesting advice. Determinization in reducing automata sizes rarely blows up because most vectors are the same, except for those with counting, since we do determinization only at the vector level.


## Thirdly, I did not follow why the form (0,…,0,1,0,…,0), as for the union of two CEFAs, two registers as well as two kinds of transitions (\overrightarrow{v1},\overrightarrow{0},1,0) and (\overrightarrow{0},\overrightarrow{v2},0,1) are introduced.

This is mainly because the accepting condition is global. Assuming that we do not introduce new registers and transitions, we can not decide which accepting condition to use when arriving at a final state.