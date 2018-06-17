package com.pierfrancescosoffritti.chromecastyoutubeplayer.chromecastsender

/**
 * POJO of message received from a cast receiver
 */
data class MessageFromReceiver(val type: String, val data: String)