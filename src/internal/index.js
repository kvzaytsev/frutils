export const _swap = (input, i, j) => input.splice(j, 1, input.splice(i, 1, input[j])[0]);