export default function classFix(classArray: string[]): string {
  if (classArray.some((className) => className.includes(" "))) {
    console.log(classArray);
    throw new Error("Class names should not contain spaces");
  }
  return classArray.join(" ");
}
