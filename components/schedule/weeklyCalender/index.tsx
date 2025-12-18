"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

interface ScheduleEvent {
  id: number;
  date: string;
  day: string;
  dayNumber: number;
  startTime: string;
  endTime: string;
  type: string;
  title: string;
  color: string;
  instructor: string;
  location: string;
}

interface WeeklyCalendarProps {
  events: ScheduleEvent[];
}

const WeeklyCalendar: React.FC<WeeklyCalendarProps> = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState<ScheduleEvent | null>(
    null
  );

  const timeSlots = ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"];

  const groupedEvents = events.reduce((acc, event) => {
    if (!acc[event.dayNumber]) {
      acc[event.dayNumber] = [];
    }
    acc[event.dayNumber].push(event);
    return acc;
  }, {} as Record<number, ScheduleEvent[]>);

  const getEventStyle = (event: ScheduleEvent) => {
    const startHour = parseInt(event.startTime.split(":")[0]);
    const endHour = parseInt(event.endTime.split(":")[0]);
    const duration = endHour - startHour;
    const start = startHour - 10;

    return {
      gridColumn: 2,
      gridRow: `${start + 1} / span ${duration}`,
    };
  };

  const getColorClass = (color: string) => {
    return styles[`event${color.charAt(0).toUpperCase() + color.slice(1)}`];
  };

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Weekly Schedule</h2>
        <div className={styles.headerActions}>
          <button className={styles.todayButton}>Today</button>
          <div className={styles.navigationButtons}>
            <button className={styles.navButton}>‹</button>
            <span className={styles.weekRange}>Jan 10 - Jan 14, 2024</span>
            <button className={styles.navButton}>›</button>
          </div>
        </div>
      </div>

      <div className={styles.calendarGrid}>
        {/* Time header */}
        <div className={styles.timeHeader}>
          {timeSlots.map((time, index) => (
            <div key={index} className={styles.timeSlot}>
              {time}
            </div>
          ))}
        </div>

        {/* Days grid */}
        <div className={styles.daysContainer}>
          {Object.entries(groupedEvents).map(([dayNumber, dayEvents]) => {
            const firstEvent = dayEvents[0];
            return (
              <div key={dayNumber} className={styles.dayColumn}>
                <div className={styles.dayHeader}>
                  <span className={styles.dayNumber}>{dayNumber}</span>
                  <span className={styles.dayName}>{firstEvent.day}</span>
                </div>

                <div className={styles.eventsGrid}>
                  {dayEvents.map((event) => (
                    <div
                      key={event.id}
                      className={`${styles.eventCard} ${getColorClass(
                        event.color
                      )}`}
                      style={getEventStyle(event)}
                      onClick={() => setSelectedEvent(event)}
                    >
                      <div className={styles.eventType}>{event.type}</div>
                      <div className={styles.eventTitle}>{event.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className={styles.modal} onClick={() => setSelectedEvent(null)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <h3>{selectedEvent.title}</h3>
              <button
                className={styles.closeButton}
                onClick={() => setSelectedEvent(null)}
              >
                ✕
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.modalRow}>
                <span className={styles.modalLabel}>Type:</span>
                <span className={styles.modalValue}>{selectedEvent.type}</span>
              </div>
              <div className={styles.modalRow}>
                <span className={styles.modalLabel}>Time:</span>
                <span className={styles.modalValue}>
                  {selectedEvent.startTime} - {selectedEvent.endTime}
                </span>
              </div>
              <div className={styles.modalRow}>
                <span className={styles.modalLabel}>Instructor:</span>
                <span className={styles.modalValue}>
                  {selectedEvent.instructor}
                </span>
              </div>
              <div className={styles.modalRow}>
                <span className={styles.modalLabel}>Location:</span>
                <span className={styles.modalValue}>
                  {selectedEvent.location}
                </span>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.joinButton}>Join Session</button>
              <button className={styles.detailsButton}>View Details</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeeklyCalendar;
