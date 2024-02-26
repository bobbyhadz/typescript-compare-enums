export {};

// Example 1 - Comparing Enums in Typescript

enum ShirtSizes {
  Small,
  Medium,
  Large,
}

const small = ShirtSizes.Small; // 👉️ 0
const medium = ShirtSizes.Medium; // 👉️ 1

if (small < medium) {
  console.log('✅ This runs');
}

if (small === 0) {
  console.log('✅ This runs');
}

const enumKey = ShirtSizes[ShirtSizes.Small];
console.log(enumKey); // 👉️ "Small"

if (enumKey === 'Small') {
  console.log('✅ This runs');
}

// ---------------------------------------------------

// // EXAMPLE 2 - Using reverse mappings when comparing enums

// enum ShirtSizes {
//   Small,
//   Medium,
//   Large,
// }

// const small = ShirtSizes.Small; // 👉️ 0
// const medium = ShirtSizes.Medium; // 👉️ 1

// const enumKey = ShirtSizes[ShirtSizes.Small];
// console.log(enumKey); // 👉️ "Small"

// const eKey = ShirtSizes[0];
// console.log(eKey); // 👉️ Small

// ---------------------------------------------------

// EXAMPLE 3 - Checking if a key or value is contained in an enum

// enum ShirtSizes {
//   Small = 'SMALL',
//   Medium = 'MEDIUM',
//   Large = 'LARGE',
// }

// const keys = Object.keys(ShirtSizes);
// console.log(keys); // 👉️ ['Small', 'Medium', 'Large']

// if (keys.includes('Small')) {
//   console.log('✅ This runs');
// }

// const values = Object.values(ShirtSizes);
// console.log(values);

// if (values.includes('SMALL' as unknown as ShirtSizes)) {
//   console.log('✅ This runs');
// }
