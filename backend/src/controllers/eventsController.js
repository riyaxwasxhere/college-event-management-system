// GET /events (all the events created by admin)
// POST /events
// PATCH /events/:eventId
// DELETE /events/:eventId

import Event from "../models/Event.js";

export function getAllEvents(req, res) {
  //admin => event created by him
  //participant => all events
}
export async function createEvent(req, res) {
  const bannerImageUrl = req.file?.path;
  const event = await Event.create({
    ...req.body,
    bannerImageUrl,
    createdBy: req.user.id,
  });
  res.status(201).json({ success: true, event });
}
export function updateEvent(req, res) {}
export function deleteEvent(req, res) {}

// GET /events/:eventId/participants
// GET /events/:eventId/analytics
// GET /events/:eventId/volunteers

export function getEventParticipants(req, res) {}
export function getEventAnalytics(req, res) {}
export function getEventVolunteers(req, res) {}

// GET /events/:eventId
export function getEventDetails(req, res) {}
