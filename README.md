# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

---

Answer:

I think the best case scenario for this algorithm is $\Theta(n * n!)$. The reason for this is because there are that many possible permutations of the input array. To find the permutations of `[0, 1, 2, 3]` for example, you need to find the permutations of `[1, 2, 3]`, `[2, 3]`, and `[3]`, in reverse order, and insert the first element of the next largest array in every position. There are going to be n function calls, each dealing with (n - 1) elements. For each subpermutation, though, there are (n + 1) insertions that need to be done. All of this is for the `permutations()` function at the beginning of `permutationSort()`. Also, for every permutation check, there is linear work being done to check that every element in that permutation is ordered. In the best case, the first permutation tried is the sorted one, so that would result in $\Theta(n)$. Overall, the best case scenario for the whole `permutationSort()` function would be $\Theta(n * n! + n)$.

The worst case scenario would be the case in which every permutation had to be checked. This would result in n! checks. The work for generating permutations is $\Theta(n * n!)$, and that is added to the work of checking every permutation, which is $\Theta(n!)$, times the work of checking that every element is ordered: $\Theta(n)$. This results in $\Theta(n * n! + n * n!)$, which disregarding constants results in $\Theta(n * n!)$.

Therefore, the best and worst case scenarios for this algorithm are asymptotically the same. It seems that the work for checking all permutations is largely inconsequential compared to that of finding all of them.

---

I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.