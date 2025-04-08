// import Image from "next/image";

// export default function Home() {
//   return (
//    <div>
//     </div>
//   );
// }
'use client'


import { useState } from "react";
import SubscriptionModal from "./../app/components/SubscriptionModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={() => setModalOpen(true)}
        className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Open Subscription Modal
      </button>

      <SubscriptionModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
