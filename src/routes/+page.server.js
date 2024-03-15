export const actions = {
  async default({ request }) {
    const data = await request.formData();
    const items = data.getAll("item");
    console.log("total checked:", items.length);
    return { success: true };
  },
};
