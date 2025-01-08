function greet(name: string, greeting: string) {
  if (greeting) {
    return `${greeting}, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}

greet("John", "Good morning");
