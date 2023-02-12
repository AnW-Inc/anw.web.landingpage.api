import readingTime from "reading-time";

export default {
  async beforeCreate(event) {
    const {
      params: { data },
    } = event;
    const { content } = data;
    if (content && content?.length > 0) {
      data.readingTime = readingTime(content)?.text || null;
    }
  },
  async beforeUpdate(event) {
    const {
      params: { data },
    } = event;

    const { content } = data;
    if (content && content?.length > 0) {
      data.readingTime = readingTime(content)?.text || null;
    }
  },
};
