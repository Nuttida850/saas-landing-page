import React from "react";
import { LuCircleCheckBig } from "react-icons/lu";

function Plan() {
  return (
    <div className="py-10">
      <div className="container max-w-[1320px] mx-auto p-10 text-center">
        <h2 className="text-7xl font-bold mb-5">Choose Your Plan</h2>
        <p className="text-lg mb-20">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 text-left gap-10">
          <div className="p-10 border-1 border-[#FFE492] rounded-md mt-10">
            <h4 className="text-2xl font-semibold">Free</h4>
            <h2 className="text-4xl font-bold my-5">$0</h2>
            <p className="text-lg font-medium">
              Capture ideas and find them quickly
            </p>
            <ul className="text-base my-5 space-y-3">
              <li className="flex">
                <span>
                  <LuCircleCheckBig className="mr-3" />
                </span>
                Sync unlimited devices
              </li>
              <li className="flex">
                <span>
                  <LuCircleCheckBig className="mr-3" />
                </span>
                10 GB monthly uploads
              </li>
              <li className="flex">
                <span>
                  <LuCircleCheckBig className="mr-3" />
                </span>
                200 MB max. note size
              </li>
              <li className="flex">
                <span>
                  <LuCircleCheckBig className="mr-3" />
                </span>
                Customize Home dashboard and access extra widgets
              </li>
              <li className="flex">
                <span>
                  <LuCircleCheckBig className="mr-3" />
                </span>
                Connect primary Google Calendar account
              </li>
              <li className="flex">
                <span>
                  <LuCircleCheckBig className="mr-3" />
                </span>
                Add due dates, reminders, and notifications to your tasks
              </li>
            </ul>
            <a
              href="#"
              className="px-5 py-3 inline-flex border-1 border-[#FFE492] rounded-md font-medium"
            >
              Get Started
            </a>
          </div>
          <div className="p-10 border-1 bg-[#043873] rounded-md text-white row-span-2">
            <div className="mt-6">
              <h4 className="text-2xl font-semibold">Personal</h4>
              <h2 className="text-4xl font-bold my-5 text-[#FFE492]">$11.99</h2>
              <p className="text-lg font-medium">
              Keep home and family on track              </p>
              <ul className="text-lg my-5 space-y-3">
                <li className="flex">
                  <span>
                    <LuCircleCheckBig className="mr-3 text-[#FFE492]" />
                  </span>
                  Sync unlimited devices
                </li>
                <li className="flex">
                  <span>
                    <LuCircleCheckBig className="mr-3 text-[#FFE492]" />
                  </span>
                  10 GB monthly uploads
                </li>
                <li className="flex">
                  <span>
                    <LuCircleCheckBig className="mr-3 text-[#FFE492]" />
                  </span>
                  200 MB max. note size
                </li>
                <li className="flex">
                  <span>
                    <LuCircleCheckBig className="mr-3 text-[#FFE492]" />
                  </span>
                  Customize Home dashboard and access extra widgets
                </li>
                <li className="flex">
                  <span>
                    <LuCircleCheckBig className="mr-3 text-[#FFE492]" />
                  </span>
                  Connect primary Google Calendar account
                </li>
                <li className="flex">
                  <span>
                    <LuCircleCheckBig className="mr-3 text-[#FFE492]" />
                  </span>
                  Add due dates, reminders, and notifications to your tasks
                </li>
              </ul>
              <a
                href="#"
                className="px-5 py-3 inline-flex bg-[#4F9CF9] text-white rounded-md font-medium"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="p-10 border-1 border-[#FFE492] rounded-md mt-10">
            <h4 className="text-2xl font-semibold">Organization</h4>
            <h2 className="text-4xl font-bold my-5">$49.99</h2>
            <p className="text-lg font-medium">
              Capture ideas and find them quickly
            </p>
            <ul className="text-base my-5 space-y-3">
              <li className="flex">
                <span>
                  <LuCircleCheckBig className="mr-3" />
                </span>
                Sync unlimited devices
              </li>
              <li className="flex">
                <span>
                  <LuCircleCheckBig className="mr-3" />
                </span>
                10 GB monthly uploads
              </li>
              <li className="flex">
                <span>
                  <LuCircleCheckBig className="mr-3" />
                </span>
                200 MB max. note size
              </li>
              <li className="flex">
                <span>
                  <LuCircleCheckBig className="mr-3" />
                </span>
                Customize Home dashboard and access extra widgets
              </li>
              <li className="flex">
                <span>
                  <LuCircleCheckBig className="mr-3" />
                </span>
                Connect primary Google Calendar account
              </li>
              <li className="flex">
                <span>
                  <LuCircleCheckBig className="mr-3" />
                </span>
                Add due dates, reminders, and notifications to your tasks
              </li>
            </ul>
            <a
              href="#"
              className="px-5 py-3 inline-flex border-1 border-[#FFE492] rounded-md font-medium"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plan;
