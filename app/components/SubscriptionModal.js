'use client'
import { useState } from "react";

export default function SubscriptionModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg p-6 overflow-y-auto max-h-[90vh] relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Modal content */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <img
              src="/subscription.png" // Replace with your image path
              alt="Subscription"
              className="rounded w-full object-cover"
            />
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-xl font-semibold">Coworking Hot Desk / Mois (WZ 1.0)</h2>
            <p className="text-gray-600 text-sm">
              Accès 24/7, internet fibre, +2h de salle de réunion, et plus encore.
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-700">
              <li>Accès 24/7</li>
              <li>Connexion fibre optique 100 Mo</li>
              <li>2 heures de réunion gratuites</li>
            </ul>
            <p className="text-lg font-bold text-red-500">350 DT / Mois</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              S'abonner maintenant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
