"use client";
import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";

// Main App Component
export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <BackgroundAnimation />
      <Header />
      <MainContent />
      <DeviceInfo />
      <Footer />
    </div>
  );
}

// Header Component with Logo and Clock
function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4">
      <div className="text-4xl font-bold text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]">
        Scrubbe
      </div>
      <AnalogClock />
    </header>
  );
}

// Analog Clock Component
function AnalogClock() {
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours() % 12;
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      const hourDeg = (hours + minutes / 60) * 30;
      const minuteDeg = (minutes + seconds / 60) * 6;
      const secondDeg = seconds * 6;

      if (document.getElementById("hour-hand"))
        document.getElementById(
          "hour-hand"
        )!.style.transform = `rotate(${hourDeg}deg)`;
      if (document.getElementById("minute-hand"))
        document.getElementById(
          "minute-hand"
        )!.style.transform = `rotate(${minuteDeg}deg)`;
      if (document.getElementById("second-hand"))
        document.getElementById(
          "second-hand"
        )!.style.transform = `rotate(${secondDeg}deg)`;
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-24 h-24 rounded-full bg-white bg-opacity-10 relative border-2 border-white border-opacity-20 shadow-[0_0_20px_rgba(96,165,250,0.3)]">
      <div
        id="hour-hand"
        className="absolute bg-white rounded-full w-1 h-6 left-1/2 top-6 -ml-0.5 origin-bottom"
      ></div>
      <div
        id="minute-hand"
        className="absolute bg-white rounded-full w-0.5 h-8 left-1/2 top-4 -ml-0.5 origin-bottom"
      ></div>
      <div
        id="second-hand"
        className="absolute bg-blue-400 rounded-full w-0.5 h-10 left-1/2 top-2 -ml-0.5 origin-bottom"
      ></div>
      <div className="absolute bg-blue-400 w-2 h-2 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
}

// Main Content Component
function MainContent() {
  const [showModal, setShowModal] = useState(false);

  return (
    <article className="container max-w-[1200px] mx-auto px-8 z-10 flex-1 flex flex-col justify-center">
      <div className="text-center py-12">
        <h1 className="text-5xl md:text-[3.5rem] mb-4 font-bold bg-gradient-to-br from-blue-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(96,165,250,0.3)]">
          Scrubbe is coming soon
        </h1>
        <h2 className="text-3xl mb-8 font-light opacity-90">
          The next generation SIEM & SOAR platform that revolutionizes
          cybersecurity operations
        </h2>
        <button
          onClick={() => setShowModal(true)}
          className="inline-block bg-gradient-to-br from-blue-500 to-blue-600 text-white no-underline py-3 px-8 rounded font-semibold text-lg shadow-lg shadow-blue-600/40 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/60"
        >
          Get Early Access
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
        <FeatureCard
          title="Advanced User-facing Analytics"
          description="Powerful analytics dashboard providing insights on user behaviour."
        />
        <FeatureCard
          title="Seamless Automation"
          description="Automate response workflows and eliminate repetitive tasks with our intelligent SOAR capabilities."
        />
        <FeatureCard
          title="Unified Security Platform"
          description="Combine SIEM and SOAR in one integrated solution for comprehensive security operations."
        />
      </div>

      {showModal && <FormModal onClose={() => setShowModal(false)} />}
    </article>
  );
}

// Feature Card Component
function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-slate-800 bg-opacity-50 rounded-lg p-8 border border-blue-400 border-opacity-20 backdrop-blur-lg transition-transform duration-300 hover:-translate-y-1 max-w-[280px] md:max-w-[320px] justify-self-center text-[1rem]">
      <h3 className="text-blue-400 mb-4">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// Form Modal Component
function FormModal({ onClose }: { onClose: () => void }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, onClose]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
      <div
        ref={modalRef}
        className="w-full max-w-lg bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-blue-400 border-opacity-20 shadow-2xl relative"
      >
        <span
          className="absolute top-4 right-4 text-[2.5rem] text-blue-400 cursor-pointer transition-colors hover:text-blue-500"
          onClick={onClose}
        >
          &times;
        </span>

        <h1 className="text-3xl font-bold mb-6 text-center text-blue-400">
          Get Early Access
        </h1>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full py-3 px-4 rounded bg-slate-900 bg-opacity-50 border border-blue-400 border-opacity-20 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full py-3 px-4 rounded bg-slate-900 bg-opacity-50 border border-blue-400 border-opacity-20 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="company" className="block mb-2 font-medium">
                Company
              </label>
              <input
                type="text"
                id="company"
                required
                className="w-full py-3 px-4 rounded bg-slate-900 bg-opacity-50 border border-blue-400 border-opacity-20 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="role" className="block mb-2 font-medium">
                Role
              </label>
              <select
                id="role"
                required
                className="w-full py-3 px-4 rounded bg-slate-900 bg-opacity-50 border border-blue-400 border-opacity-20 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30"
              >
                <option value="">Select your role</option>
                <option value="CISO">CISO</option>
                <option value="Security Engineer">Security Engineer</option>
                <option value="SOC Analyst">SOC Analyst</option>
                <option value="IT Manager">IT Manager</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-medium">
                How can Scrubbe help your organization?
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full py-3 px-4 rounded bg-slate-900 bg-opacity-50 border border-blue-400 border-opacity-20 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white border-none rounded font-semibold text-lg cursor-pointer transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/40"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="text-center p-8 bg-green-900 bg-opacity-10 border border-green-500 border-opacity-30 rounded-lg mt-8">
            <h2 className="text-green-400 text-2xl mb-4">Thank You!</h2>
            <p className="mb-4">
              We&apos;ve received your information and will be in touch soon
              about early access to Scrubbe.
            </p>
            <p>
              We&apos;re excited to revolutionize your security operations with
              our next-generation SIEM and SOAR platform.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Background Animation Component
function BackgroundAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Capture the current value of the ref
    const currentContainer = containerRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    currentContainer.appendChild(renderer.domElement);

    // Create network nodes and connections
    const nodes: THREE.Mesh[] = [];
    const connections: {
      line: THREE.Line;
      node1: number;
      node2: number;
    }[] = [];
    const nodeCount = 20;

    for (let i = 0; i < nodeCount; i++) {
      const geometry = new THREE.SphereGeometry(0.2, 32, 32);
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(0x60a5fa),
        transparent: true,
        opacity: 0.7,
      });
      const node = new THREE.Mesh(geometry, material);

      node.position.x = (Math.random() - 0.5) * 30;
      node.position.y = (Math.random() - 0.5) * 15;
      node.position.z = (Math.random() - 0.5) * 10 - 15;

      node.userData = {
        velocityX: (Math.random() - 0.5) * 0.02,
        velocityY: (Math.random() - 0.5) * 0.02,
        velocityZ: (Math.random() - 0.5) * 0.01,
      };

      nodes.push(node);
      scene.add(node);
    }

    // Create connections between nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.85) {
          const material = new THREE.LineBasicMaterial({
            color: 0x3b82f6,
            transparent: true,
            opacity: 0.3,
          });
          const geometry = new THREE.BufferGeometry().setFromPoints([
            nodes[i].position,
            nodes[j].position,
          ]);
          const line = new THREE.Line(geometry, material);
          connections.push({
            line: line,
            node1: i,
            node2: j,
          });
          scene.add(line);
        }
      }
    }

    camera.position.z = 5;

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);

      // Move nodes
      nodes.forEach((node) => {
        node.position.x += node.userData.velocityX;
        node.position.y += node.userData.velocityY;
        node.position.z += node.userData.velocityZ;

        // Boundary check and bounce
        if (Math.abs(node.position.x) > 15) node.userData.velocityX *= -1;
        if (Math.abs(node.position.y) > 8) node.userData.velocityY *= -1;
        if (Math.abs(node.position.z) > 10) node.userData.velocityZ *= -1;
      });

      // Update connections
      connections.forEach((conn) => {
        const points = [nodes[conn.node1].position, nodes[conn.node2].position];
        conn.line.geometry.setFromPoints(points);
      });

      renderer.render(scene, camera);
    }

    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      // Use the captured value instead of containerRef.current
      currentContainer.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-0"></div>;
}

// Device Info Component
function DeviceInfo() {
  const [deviceInfo, setDeviceInfo] = useState({
    location: "Detecting...",
    device: "Detecting...",
    network: "Detecting...",
  });

  useEffect(() => {
    // Device detection
    const userAgent = navigator.userAgent;
    let deviceType = "Unknown";

    if (/Android/i.test(userAgent)) {
      deviceType = "Android";
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
      deviceType = "iOS";
    } else if (/Windows/i.test(userAgent)) {
      deviceType = "Windows";
    } else if (/Mac/i.test(userAgent)) {
      deviceType = "Mac";
    } else if (/Linux/i.test(userAgent)) {
      deviceType = "Linux";
    }

    setDeviceInfo((prev) => ({ ...prev, device: `Device: ${deviceType}` }));

    // Network detection (limited by browser capabilities)
    interface NetworkInformation {
      effectiveType?: string;
      downlink?: number;
      rtt?: number;
      saveData?: boolean;
      // Add other properties if needed
    }

    if ("connection" in navigator) {
      const connection = (
        navigator as Navigator & { connection?: NetworkInformation }
      ).connection;
      const networkType = connection?.effectiveType || "Unknown";
      setDeviceInfo((prev) => ({
        ...prev,
        network: `Network: ${networkType}`,
      }));
    }

    // Location detection
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Reverse geocoding to get location name
          fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          )
            .then((response) => response.json())
            .then((data) => {
              const locationName =
                data.address?.city ||
                data.address?.town ||
                data.address?.village ||
                "Unknown";
              setDeviceInfo((prev) => ({
                ...prev,
                location: `Location: ${locationName}`,
              }));
            })
            .catch(() => {
              setDeviceInfo((prev) => ({
                ...prev,
                location: `Location: ${latitude.toFixed(
                  2
                )}, ${longitude.toFixed(2)}`,
              }));
            });
        },
        () => {
          setDeviceInfo((prev) => ({
            ...prev,
            location: "Location: Access Denied",
          }));
        }
      );
    }
  }, []);

  return (
    <div className="fixed bottom-5 left-5 bg-slate-900 bg-opacity-70 p-3 rounded backdrop-blur border border-blue-400 border-opacity-20 text-sm z-40">
      <p>{deviceInfo.location}</p>
      <p>{deviceInfo.device}</p>
      <p>{deviceInfo.network}</p>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="text-center p-8 mt-auto text-sm opacity-80">
      <p>&copy; {new Date().getFullYear()} Scrubbe. All rights reserved.</p>
    </footer>
  );
}