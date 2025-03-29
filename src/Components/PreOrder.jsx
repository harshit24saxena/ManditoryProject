
import React, { useState, useEffect } from "react";
import { Link } from "react-router";

export default function PreOrder() {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOrderable, setIsOrderable] = useState(true);
  const [warningMessage, setWarningMessage] = useState("");

  // Colors from specified palette
  const colors = {
    primary: "#4A7C59", // Deep forest green
    secondary: "#BFA78B", // Soft tan
  };

  // Define time slots
  const timeSlots = [
    { id: 1, label: "10 AM - 12 PM", startHour: 10, endHour: 12 },
    { id: 2, label: "12 PM - 2 PM", startHour: 12, endHour: 14 },
    { id: 3, label: "2 PM - 5 PM", startHour: 14, endHour: 17 },
  ];

  // Check if the time slot is available for pre-order (2 hours prior)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update time every minute

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (selectedTimeSlot) {
      const slot = timeSlots.find(slot => slot.id === selectedTimeSlot);
      const currentHour = currentTime.getHours();
      const currentMinutes = currentTime.getMinutes();
      
      // Calculate if the selected time slot is at least 2 hours ahead
      if (slot.startHour - currentHour > 2) {
        // More than 2 hours ahead - orderable
        setIsOrderable(true);
        setWarningMessage("");
      } else if (slot.startHour - currentHour === 2) {
        // Exactly 2 hours ahead - check minutes
        if (currentMinutes === 0) {
          setIsOrderable(true);
          setWarningMessage("");
        } else {
          setIsOrderable(false);
          setWarningMessage("You can pre-order only 2 hours prior to delivery time.");
        }
      } else {
        // Less than 2 hours ahead - not orderable
        setIsOrderable(false);
        setWarningMessage("You can pre-order only 2 hours prior to delivery time.");
      }
    }
  }, [selectedTimeSlot, currentTime]);

  const handleTimeSlotSelection = (slotId) => {
    setSelectedTimeSlot(slotId);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "40px" }}>
      <h2 style={{ color: colors.primary, borderBottom: `2px solid ${colors.secondary}`, paddingBottom: "10px" }}>
        Pre-Order Your Meal
      </h2>
      
      <p style={{ marginBottom: "20px" }}>
        Current time: {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </p>
      
      <div>
        <h3 style={{ color: colors.primary }}>Select Delivery Time</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
          {timeSlots.map((slot) => (
            <button
              key={slot.id}
              onClick={() => handleTimeSlotSelection(slot.id)}
              style={{
                padding: "15px",
                borderRadius: "8px",
                border: `1px solid ${colors.secondary}`,
                backgroundColor: selectedTimeSlot === slot.id ? colors.primary : "white",
                color: selectedTimeSlot === slot.id ? "white" : colors.primary,
                cursor: "pointer",
                fontWeight: "bold",
                transition: "all 0.3s ease"
              }}
            >
              {slot.label}
            </button>
          ))}
        </div>
      </div>
      
      {warningMessage && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            backgroundColor: "#FFEBE6",
            border: "1px solid #FFCCC7",
            borderRadius: "4px",
            color: "#CF1322"
          }}
        >
          <strong>Warning:</strong> {warningMessage}
        </div>
      )}

      
      
      <p style={{ marginTop: "15px", color: "#666", fontSize: "14px" }}>
        Note: Pre-orders must be placed at least 2 hours before the delivery time.
      </p>
    </div>
  );
}