package com.saf.service.impl;

import com.saf.service.NoteEsameService;
import com.saf.domain.NoteEsame;
import com.saf.repository.NoteEsameRepository;
import com.saf.service.dto.NoteEsameDTO;
import com.saf.service.mapper.NoteEsameMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Service Implementation for managing NoteEsame.
 */
@Service
@Transactional
public class NoteEsameServiceImpl implements NoteEsameService {

    private final Logger log = LoggerFactory.getLogger(NoteEsameServiceImpl.class);

    private final NoteEsameRepository noteEsameRepository;

    private final NoteEsameMapper noteEsameMapper;

    public NoteEsameServiceImpl(NoteEsameRepository noteEsameRepository, NoteEsameMapper noteEsameMapper) {
        this.noteEsameRepository = noteEsameRepository;
        this.noteEsameMapper = noteEsameMapper;
    }

    /**
     * Save a noteEsame.
     *
     * @param noteEsameDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public NoteEsameDTO save(NoteEsameDTO noteEsameDTO) {
        log.debug("Request to save NoteEsame : {}", noteEsameDTO);
        NoteEsame noteEsame = noteEsameMapper.toEntity(noteEsameDTO);
        noteEsame = noteEsameRepository.save(noteEsame);
        return noteEsameMapper.toDto(noteEsame);
    }

    /**
     * Get all the noteEsames.
     *
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<NoteEsameDTO> findAll() {
        log.debug("Request to get all NoteEsames");
        return noteEsameRepository.findAll().stream()
            .map(noteEsameMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }

    /**
     * Get one noteEsame by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public NoteEsameDTO findOne(Long id) {
        log.debug("Request to get NoteEsame : {}", id);
        NoteEsame noteEsame = noteEsameRepository.findOne(id);
        return noteEsameMapper.toDto(noteEsame);
    }

    /**
     * Delete the noteEsame by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete NoteEsame : {}", id);
        noteEsameRepository.delete(id);
    }
}
