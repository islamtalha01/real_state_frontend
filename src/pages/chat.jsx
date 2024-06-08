import Layout from "../components/Layout";
import Content from "../components/chat/Content";
import Footer from "../components/chat/Footer";
import ChatTextarea from "../components/chat/ChatTextarea";

export default function ChatPage() {
    return (
    <Layout title="Chat">
        <Content />
        <Footer>

        <div class="flex fixed bottom-10  w-2/5 flex-col gap-1.5 rounded-[26px]  ">

            <ChatTextarea />
       </div>
        </Footer>
    </Layout>
  )
}