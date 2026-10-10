// styles
declare module '*.scss' {
  const content: { [key: string]: string; }
  
  export default content;
}

// imgs
declare module '*.svg' {
  const content: string;
  
  export default content;
}