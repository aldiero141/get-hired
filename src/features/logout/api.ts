export function logout(): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.removeItem("user");
      resolve(true);
    }, 500);
  });
}
